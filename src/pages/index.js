import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1510125594188-5afc74c8cc43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80) center/cover"
			padding="60px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Box margin="-16px -16px -16px -16px" display="flex">
				<Box display="flex" padding="16px 16px 16px 16px" width="75%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							Excellence in everything
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							Striving for perfection in everything we do. Unparalleled service for everyone.
						</Text>
					</Box>
				</Box>
			</Box>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box
				padding="80px 72px 80px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
			>
				<Box
					width="60%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline2"
						color="--dark"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Setting up a workplace in the office and at home
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--greyD3" md-text-align="center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
					</Text>
				</Box>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 4%"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="12px"
			>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						1
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 30px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						2
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						3
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 0px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						4
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"688f2ba4eb72ed0019e7d156"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});