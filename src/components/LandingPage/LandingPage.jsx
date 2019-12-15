import React, { Component }from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { ratingService } from '../../services/rating/rating.service';
import Carousel from 'react-material-ui-carousel'
import { Paper, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
const styles = theme => ({
	root: {
		// height: '100%',
		// maxWidth:'80%',
	},
	listContainer: {
		// height: '50%',
		verticalAlign: 'middle',
		padding: '0 1em'
	},
	card: {
		height: '20em',
		cursor:'pointer'
	},
	title: {
		padding: '0.5em'
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
			categories: null
		};
	}

	componentDidMount(){
		ratingService.GetTopAverageServices()
			.then( async (servicesRes) => {
				this.setState({
					topAverageService: servicesRes
				});
			})
			.catch(() => {
				toast.error(this.props.t('showlandingpagefail'), {
					position: toast.POSITION.BOTTOM_RIGHT
				});
			});
	}


	render(){
		const classes = this.props.classes;
		return this.state.topAverageService?
			<Paper 
				className={classes.listContainer}
				elevation={0}
			>
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
			</Paper>:
			null;
	}
}

export default withTranslation()(withStyles(styles)(LandingPage));
