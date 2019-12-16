import React, { Component }from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { ratingService } from '../../services/rating/rating.service';
import { serviceService } from '../../services/service/service.service';
import { userService } from '../../services/user/user.service';
import Carousel from 'react-material-ui-carousel';
import { Paper, Card, CardMedia, CardContent, Typography, InputBase, IconButton, Grid, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const styles = theme => ({
	introductionContainer: {
		backgroundColor: '#80d8ff'
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
		paddingTop: '2em',
		paddingBottom: '1em',
		width: '100%'
	},
	CardContent: {
		height: '20%',
	},
	media: {
		height: '70%',
		objectFit: 'fill'
	},
	buttonContainer: {
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		marginTop: '1em'
	},
	divider: {
		margin: '0em 2em'
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
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	componentDidMount(){
		if(!this.props.loggedIn){
			ratingService.GetTopAverageServices(5)
				.then( async (servicesRes) => {
					this.setState({
						topAverageService: servicesRes
					});
				})
				.catch(() => {
					toast.error(this.props.t('landingServiceFail'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
				});
		}else {
			serviceService.getTopRecomenderServices()
				.then( async (recommendationsRes) => {
					this.setState({
						recommendations: recommendationsRes
					});
				})
				.catch(() => {
					toast.error(this.props.t('landingPageServiceFail'), {
						position: toast.POSITION.BOTTOM_RIGHT
					});
				});
		}
		userService.getAllTutors()
			.then(tutorRes => {
				let n = tutorRes.length;
				while(n--) {
					let i = Math.floor(n * Math.random());
					let tmp = tutorRes[i];
					tutorRes[i] = tutorRes[n];
					tutorRes[n] = tmp;
				}
				if(tutorRes.length > 4){
					tutorRes = tutorRes.slice(0, 4);
				}
				this.setState({
					tutors: tutorRes
				});
			})
			.catch(() => {
				toast.error(this.props.t('landingPageTutorsFail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
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

	handleOnClick(url){
		this.setState({
			redirect: true,
			redirectTo: url
		});
	}

	getRatingComponent(classes, t){
		return this.state.topAverageService ?
			<>
				<Typography
					className={classes.title}
					align="center"
					variant="h4"
				>
					{t('landingPageTopRated')}
				</Typography>
				<Carousel
					autoPlay={true}
					indicators={false}
				> 
					{
						this.state.topAverageService.map((service, index) => {
							return <Card
								className={classes.card}
								key={index}
								onClick={() => { this.handleOnClick(`/service/${service.serviceid}`); }}
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
			</>:
			null;
	}

	getRecomendedComponent(classes, t){
		return this.state.recommendations ?
			<>
				<Typography
					className={classes.title}
					align="center"
					variant="h4"
				>
					{t('landingPageRecommended')}
				</Typography>
				<Carousel
					autoPlay={true}
					indicators={false}
				> 
					{
						this.state.recommendations.map((recommendation, index) => {
							return <Card
								className={classes.card}
								onClick={() => { this.handleOnClick(`/service/${recommendation.service.id}`); }}
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
			</>:
			null;
	}

	getTutorsComponent(classes, t){
		return <>
			<Typography
				className={classes.title}
				align="center"
				variant="h4"
			>
				{t('landingPageTutors')}
			</Typography>
			<Grid container spacing={3}>
				{
					this.state.tutors.map((tutor, i) => {
						return <Grid item sm={3} xs={6}  key={i}>
							<Card
								className={classes.card}
								onClick={() => { this.handleOnClick(`/user/${tutor.user.id}`); }}
							>
								<CardMedia 
									className={classes.media}
									component='img'
									image={`https://api.adorable.io/avatars/140/${tutor.user.id}@adorable.png`}
								/>
								<CardContent
									className={classes.cardContent} 
								>
									<Typography 
										variant='h6'
									>
										{tutor.user.firstName + ' ' + tutor.user.lastName}
									</Typography>
								</CardContent>
							</Card>
						</Grid>;
					})
				}
			</Grid>
		</>;
	}


	render(){
		const classes = this.props.classes;
		const t = this.props.t;
		if(this.state.redirect){
			return (<Redirect to={this.state.redirectTo} />);
		}
		return <>
			<Card
				className={classes.introductionContainer}
			>
				<CardContent>
					<Typography
						align="center"
						variant="h2"
					>
						{t('landingPageSearchTitle')}
					</Typography>
					<Typography
						align="center"
						variant="body1"
					>
						{t('landingPageIntro')}
					</Typography>
					{
						this.props.loggedIn ?
							<div className={classes.buttonContainer}>
								<Button 
									onClick = {() => {this.handleOnClick('/service');}}
									color="default"
									variant="contained"
								>
									{t('services')}
								</Button>
							</div>:
							<div className={classes.buttonContainer}>
								<Button 
									onClick={() => {this.handleOnClick('/register');}}
									color="default"
									variant="contained"
								>
									{t('register')}
								</Button>
								<div className={classes.divider} />
								<Button 
									onClick = {() => {this.handleOnClick('/service');}}
									color="default"
									variant="contained"
								>
									{t('services')}
								</Button>
							</div>

					}
				</CardContent>
			</Card>
			<Typography
				className={classes.title}
				align="center"
				variant="h4"
			>
				{t('landingPageSearchTitle')}
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
					this.getRecomendedComponent(classes, t):
					this.getRatingComponent(classes, t)
			}
			{
				this.state.tutors ? 
					this.getTutorsComponent(classes, t):
					null
			}
		</>;
	}
}

export default withTranslation()(withStyles(styles)(LandingPage));
