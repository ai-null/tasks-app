import React, { PureComponent } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Appbar, Headline, Subheading, Button, Paragraph, Title } from 'react-native-paper';
import * as config from '../../../config';

import CustomStatusBar from '../CustomStatusBar';
import Container from '../Container';

/* Constants
============================================================================*/
const { width, height } = Dimensions.get('window');

export default class Intro extends PureComponent {
	render() {
		return (
			<Container>
				<CustomStatusBar barStyle="dark-content" />
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.container}>
						<Image source={require('../../../assets/illustrations/intro.png')} style={styles.imageCover} />
						<View style={styles.content}>
							<Headline style={styles.headline}>Welcome to Tasks</Headline>
							<Subheading style={styles.subHeading}>
								Keep track of important things that you need to get done in one place.
							</Subheading>
							<Button mode="contained" uppercase={false} style={styles.button} onPress={() => {}}>
								Get started
							</Button>
						</View>
					</View>
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	imageCover: {
		width: width,
		height: 430,
		resizeMode: 'cover'
	},
	content: {
		padding: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	headline: {
		color: config.grey800
	},
	subHeading: {
		textAlign: 'center',
		color: config.grey600,
		marginTop: 10,
		marginBottom: 20
	},
	button: {
		backgroundColor: config.blue600
	}
});
