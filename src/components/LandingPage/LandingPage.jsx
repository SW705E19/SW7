import React, { Component }from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { ratingService } from '../../services/rating/rating.service';
import { serviceService } from '../../services/service/service.service';
import Carousel from 'react-material-ui-carousel';
import { Paper, Card, CardMedia, CardContent, Typography, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from 'react-router';
import background from '../../assets/background.png';

const styles = theme => ({
	root: {
		// height: '100%',
		// maxWidth:'80%',
	},
	introductionContainer: {
		widt: '100vh',
		backgroundColor: '#b3e5fc',
		backgroundImage:
			'repeating-linear-gradient(120deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .1) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(60deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .1) 1px, transparent 1px, transparent 60px), linear-gradient(60deg, rgba(0, 0, 0, .1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, .1)),linear-gradient(120deg, rgba(0, 0, 0, .1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, .1) 75%, rgba(0, 0, 0, .1))',
		backgroundSize: '70px 120px'
	},
	searchbarContainer: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		marginBottom: '1em'
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton:{
		padding: 10,
	},
	listContainer: {
		// height: '50%',
		verticalAlign: 'middle',
		padding: '1em'
	},
	card: {
		height: '20em',
		cursor:'pointer'
	},
	title: {
		padding: '0.5em',
		width: '100%'
	},
	CardContent: {
		height: '20%',
	},
	media: {
		height: '70%',
		objectFit: 'fill'
	}
});

class LandingPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			services: null,
			categories: null,
			redirect: false,
			redirectTo: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		if(!this.props.loggedIn){
			ratingService.GetTopAverageServices(5)
				.then( async (servicesRes) => {
					this.setState({
						topAverageService: servicesRes
					});
				})
				.catch((error) => {
					toast.error(this.props.t('showlandingpagefail'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
					console.log(error);
				});
		}else {
			serviceService.getTopRecomenderServices()
				.then( async (recommendationsRes) => {
					this.setState({
						recommendations: recommendationsRes
					});
				})
				.catch((error) => {
					toast.error(this.props.t('showlandingpagefail'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
					console.log(error);
				});
		}
	}

	handleChange(e){
		this.setState({
			searchInput: e.target.value
		});
	}

	handleSubmit(){
		this.props.searchForService(this.state.searchInput);
		this.setState({
			redirect: true,
			redirectTo: '/service'
		});
	}

	getRatingComponent(classes){
		return this.state.topAverageService ?
			<div>
				<Typography
					className={classes.title}
					align="center"
					variant="h4"
				>
					Top rated services
				</Typography>
				<Carousel
					autoPlay={true}
					indicators={false}
				> 
					{
						this.state.topAverageService.map((service, index) => {
							return <Card
								className={classes.card}
								onClick={() => {}}
								key={index}
							>
								<CardMedia 
									className={classes.media}
									component='img'
									image={`https://picsum.photos/seed/${service.serviceid}/800/200`}
								/>
								<CardContent
									className={classes.cardContent} 
								>
									<Typography gutterBottom variant='h5' component='h2'>
										{service.name}
									</Typography>
									<Typography
										variant="body2"
										component="p"
									>
										{service.firstname + ' ' + service.lastname}
									</Typography>
								</CardContent>
							</Card>;

						})
					}
				</Carousel>
			</div>:
			null;
	}

	getRecomendedServices(classes){
		return this.state.recommendations ?
			<div>
				<Typography
					className={classes.title}
					align="center"
					variant="h4"
				>
					Top recomended services
				</Typography>
				<Carousel
					autoPlay={true}
					indicators={false}
				> 
					{
						this.state.recommendations.map((recommendation, index) => {
							return <Card
								className={classes.card}
								onClick={() => {}}
								key={index}
							>
								<CardMedia 
									className={classes.media}
									component='img'
									image={`https://picsum.photos/seed/${recommendation.service.id}/800/200`}
								/>
								<CardContent
									className={classes.cardContent} 
								>
									<Typography gutterBottom variant='h5' component='h2'>
										{recommendation.service.name}
									</Typography>
									<Typography
										variant="body2"
										component="p"
									>
										{recommendation.service.tutorInfo.user.firstName + ' ' + recommendation.service.lastName}
									</Typography>
								</CardContent>
							</Card>;

						})
					}
				</Carousel>
			</div>:
			null;
	}


	render(){
		const classes = this.props.classes;
		if(this.state.redirect){
			return (<Redirect to={this.state.redirectTo} />);
		}
		return <div>
			<Paper
				className={classes.introductionContainer}
			>
				<Typography
					align="center"
					variant="h6"
				>
					Welcome to Find a tutor. Here you can find a tutor for any subject that you would like to learn. You can also become a tutor and teach any subject that you are an expert in.
				</Typography>
			</Paper>
			<Typography
				className={classes.title}
				align="center"
				variant="h4"
			>
				Find your next course!
			</Typography>
			<Paper 
				component="form" 
				className={classes.searchbarContainer}
				elevation={4}
			>
				<InputBase
					className={classes.input}
					onChange={this.handleChange}
				/>
				<IconButton
					type="submit" 
					className={classes.iconButton}
					onClick={this.handleSubmit}
				>
					<SearchIcon />
				</IconButton>
			</Paper>
			{
				this.props.loggedIn?
					this.getRecomendedServices(classes):
					this.getRatingComponent(classes)
			}
		</div>;
	}
}

export default withTranslation()(withStyles(styles)(LandingPage));
