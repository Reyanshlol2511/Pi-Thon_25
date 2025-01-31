/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Inter } from "@next/font/google";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/Footer";
import FAQ, { FAQEnum, FAQProps } from "@/components/FAQ";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import router from "next/router";
import Theme from "@/components/Theme";
import { aboutus, event1, event2, event3, event4, event5, rules, schedule, guestSpeaker3 } from "../components/MainEventtexxt"; // Assuming you have a component named MainEvent
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const faqs: FAQProps[] = [
		{
			faqVal: FAQEnum.Q1,
			question: "What is Pi-thon'25?",
			answer:
				"Pi-thon'25 is an inter-school math competition designed to challenge and engage students in Grades 6-12."
		},
		{
			faqVal: FAQEnum.Q2,
			question: "What are the dates and timings of the event?",
			answer:
				"The event will be held on the 8th of February from 7:30 a.m. to 2:30 p.m."
		},
		{
			faqVal: FAQEnum.Q3,
			question: "Which grades can participate?",
			answer:
				"Students from Grades 6-12 are eligible to participate. There will be separate competitions for two categories: Grades 6-8 and Grades 9-12."
		},
		{
			faqVal: FAQEnum.Q4,
			question: "Can individual students participate, or do they need to be part of a team?",
			answer:
				"Students can only participate in a team of three. No individual participants are allowed."
		},
		{
			faqVal: FAQEnum.Q5,
			question: "What kind of math problems will be included in the competition?",
			answer:
				"The competition will cover a variety of mathematical concepts appropriate for the respective grade levels. You can use the practice sheet given on the website to prepare for the competition."
		},
		{
			faqVal: FAQEnum.Q6,
			question: "Is there a fee to participate?",
			answer:
				"No, there is no registration fee."
		},
		{
			faqVal: FAQEnum.Q7,
			question: "Who can I contact if I have further questions?",
			answer:
				"Please feel free to contact the organizing committee via email: pi-thon@tisb.ac.in."
		},
		{
			faqVal: FAQEnum.Q8,
			question: "What kind of support materials are allowed during the competition?",
			answer:
				"No form of technological devices for assistance are allowed. For example, calculators, laptops, etc."
		}
	];

	const [faq, setFaq] = useState<FAQEnum>(FAQEnum.NONE);

	return (
		<>
			<Head>
				<title>{"π-THON'25"}</title>
				<meta name="description" content="TISB π-thon" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="./images/Logo 2.jpg" />
			</Head>
			<div className="w-screen h-full bg-primary">
				<Navbar />

				<div className="flex items-start justify-center w-full h-full">
					<div className="flex flex-col items-center justify-start w-full h-[87vh] mt-[13vh] mx-6 sm:mx-8">
						<div
							style={{ backgroundImage: 'url("./images/Background.png")' }}
							className="flex justify-center items-center flex-col w-full h-[97%] bg-cover rounded-[2rem] grayscale-[60%]"
						// className="w-full h-[82%] mb-[4%] sm:h-[54%] sm:mb-[1%] flex flex-col justify-center items-center rounded-[2rem] grayscale-[50%] bg-cover"
						>
							<h1 className="text-4xl font-bold text-white sm:text-7xl">
								{"π-THON'25"}
							</h1>
							{/* <h3 className="text-2xl font-medium text-white sm:text-5xl mt-2" style={{ color: '#173012' }}> */}
							<h3 className="text-2xl font-medium  text-white sm:text-5xl mt-2 color-#173012">
								EMBRACE THE CIRCLE OF KNOWLEDGE
							</h3>
							<h3 className="flex items-center justify-center my-4 text-xl font-bold text-white sm:text-2xl">
								Feb 8th
							</h3>
							<motion.button
								whileHover={{ scale: 1.03 }}
								transition={{ duration: 0.3 }}
								onClick={async () => {
									router.pathname !== "/" && (await router.push("/"));
									let element = document.getElementById("winners");
									element?.scrollIntoView({
										behavior: "smooth",
										block: "start",
									});
								}}
								onClickCapture={() => window.open("https://forms.office.com/r/wrtb0FzYcc", "_blank")}
								className="flex flex-wrap w-[80%] sm:w-auto text-black items-center justify-center px-10 py-2 mt-2 text-xl brightness-[1.2] font-semibold bg-white sm:bg-gradient-to-br from-[#87CEEB] to-[#5F9EA0] rounded-3xl sm:rounded-full cursor-pointer"
							>
								Registrations Open!
							</motion.button>
						</div>

					</div>
				</div>

				{/* Practice Questoins */}
				<div className="relative bottom-20" id="practicequestions"></div>
				<div className="flex w-screen h-auto mt-16 bg-primary">
					{/* Create a section for the prizes, explaining the prize distribution for the main and mini events */}
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
						<h1 className="w-full mb-8 text-6xl font-semibold text-center sm:text-left">
							Practice Questions
						</h1>
						<div className="flex flex-col sm:flex-row items-start justify-center w-full h-auto gap-4 mb-4 sm:flex-row">
							<motion.div
								whileHover={{ scale: 1.015 }}
								transition={{ duration: 0.3 }}
								className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
							>
								<h2 className="mb-8 text-3xl font-semibold text-center">
									Junior Category (Grades 6-8)

								</h2>
								<motion.button
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3 }}
									onClick={() => window.open("https://1drv.ms/b/s!Aq1ItQ904t0xhUjN6KEJcYH5jfNY?e=l5AYzx", "_blank")}
									className="py-4 px-6 text-xl font-semibold bg-green-900 text-white rounded-lg shadow-md hover:bg-green-600 cursor-pointer"
								>
									Practice Questions
								</motion.button>
								
								<motion.button
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3 }}
									onClick={() => window.open("https://1drv.ms/b/s!Aq1ItQ904t0xhUo7FCMU_VWUOj3w?e=p7k6u3", "_blank")}
									className="py-4 px-6 text-xl font-semibold bg-green-900 text-white rounded-lg shadow-md hover:bg-green-600 cursor-pointer mt-2 "
									// style={{width:220}}
								>
									{`Solutions`}
								</motion.button>
								<h5 className="mt-2">
									Have queries? Contact pashwat@tisb.ac.in | cabir@tisb.ac.in
								</h5>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.015 }}
								transition={{ duration: 0.3 }}
								className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
							>
								<h2 className="mb-8 text-3xl font-semibold text-center">
									Senior Category (Grades 9 - 12)
								</h2>
								<motion.button
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3 }}
									onClick={() => window.open("practiceques25", "_blank")}
									className="py-4 px-6 text-xl font-semibold bg-green-900 text-white rounded-lg shadow-md hover:bg-green-600 cursor-pointer"
								>
									Practice Questions
								</motion.button>
								
								<motion.button
									whileHover={{ scale: 1.03 }}
									transition={{ duration: 0.3 }}
									onClick={() => window.open("practiceques25", "_blank")}
									className="py-4 px-6 text-xl font-semibold bg-green-900 text-white rounded-lg shadow-md hover:bg-green-600 cursor-pointer mt-2 "
									// style={{width:220}}
								>
									{`Solutions`}
								</motion.button>
								<h5 className="mt-2">
									Have queries? Contact pashwat@tisb.ac.in | cabir@tisb.ac.in
								</h5>
							</motion.div>
						</div>
					</div>
				</div>



				<div className="relative bottom-20" id="prizes"></div>
				<div className="flex w-screen h-auto mt-16 bg-primary">
					{/* Create a section for the prizes, explaining the prize distribution for the main and mini events */}
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
						<h1 className="w-full mb-8 text-6xl font-semibold text-center sm:text-left">
							Prizes
						</h1>
						<div className="flex flex-col sm:flex-row items-start justify-center w-full h-auto gap-4 mb-4 sm:flex-row">
							<motion.div
								whileHover={{ scale: 1.015 }}
								transition={{ duration: 0.3 }}
								className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
							>
								<h2 className="mb-8 text-3xl font-semibold text-center">
									Junior Category (Grades 6-8)

								</h2>
								<div className="flex flex-col items-center w-full gap-4">
									<PrizeElement text="1st Place" prize="₹20,000" />
									<PrizeElement text="2nd Place" prize="₹15,000" />
									<PrizeElement text="3rd Place" prize="₹10,000" />
								</div>
							</motion.div>

							<motion.div
								whileHover={{ scale: 1.015 }}
								transition={{ duration: 0.3 }}
								className="flex flex-col items-center justify-start w-full pt-4 pb-8 px-8 bg-gray rounded-[2rem] h-auto sm:min-h-[13rem]"
							>
								<h2 className="mb-8 text-3xl font-semibold text-center">
									Senior Category (Grades 9 - 12)

								</h2>
								<div className="flex flex-col items-center w-full gap-4">
									<PrizeElement text="1st Place" prize="₹20,000" />
									<PrizeElement text="2nd Place" prize="₹15,000" />
									<PrizeElement text="3rd Place" prize="₹10,000" />
								</div>
							</motion.div>
						</div>
					</div>
				</div>

				{/* Guest speaker profiles */}
				<div className="flex w-screen h-auto bg-primary " id="rules">
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8 ">
						<h1 className="w-full mb-8 mt-16 text-6xl font-semibold text-center sm:text-left">
							Rules
						</h1>
						<div className="flex flex-col items-start justify-center w-full h-auto gap-4">

							<MainEvent title={rules.title} description={rules.description} image='./images/Rules Bg.png' />
						</div>
					</div>
				</div>
				{/* about us */}
				<div className="flex w-screen h-auto bg-primary mt-16" id="aboutus">
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
						<h1 className="w-full mb-8 text-6xl font-semibold text-center sm:text-left">
							About Us
						</h1>
						<div className="flex flex-col items-start justify-center w-full h-auto gap-4 ">
							<MainEvent {...aboutus} image='./images/Logo 2 bg.png' />
						</div>
					</div>
				</div>

				<div className="flex w-screen h-auto bg-primary mt-16" id="schedule">
					<div className="flex flex-col items-center justify-center w-full h-auto px-6 sm:px-8">
						<h1 className="w-full mb-8 text-6xl font-semibold text-center sm:text-left">
							Schedule
						</h1>
						<div className="flex flex-col items-start justify-center w-full h-auto gap-4 ">
							<MainEvent {...schedule} image='./images/Schedule.jpg' />
						</div>
					</div>
				</div>



				{/* FAQs */}
				<div className="relative bottom-20" id="faqs"></div>
				<div className="flex items-start justify-between w-screen h-auto bg-primary mt-8">
					<div className="flex flex-col w-full items-start justify-start p-8">
						<h1 className="mb-8 text-6xl w-full text-center sm:text-left font-semibold">
							FAQs
						</h1>
						{faqs.map((faqObj: FAQProps) => {
							return (
								<FAQ
									faq={faq}
									setFaq={setFaq}
									key={faqObj.question}
									question={faqObj.question}
									faqVal={faqObj.faqVal}
									answer={faqObj.answer}
								/>
							);
						})}

						<h3 className="mt-16 mb-8 text-4xl font-semibold" id="sponsors">
							Sponsors
						</h3>
						<div className="flex flex-col items-start justify-start gap-8 ml-4 overflow-x-auto">
							<div className="flex items-start justify-start w-full gap-8">
								<div className="w-52 h-28 bg-gray rounded-lg flex justify-center items-center text-xl text-zinc-400">
									<img
									src="./images/APGuru Logo.jpg"
									/>
								</div>
								<div className="w-52 h-28 bg-gray rounded-lg flex justify-center items-center text-xl text-zinc-400">
									TBA
								</div>
								<div className="w-52 h-28 bg-gray rounded-lg flex justify-center items-center text-xl text-zinc-400">
									TBA
								</div>
							</div>
							<div className="flex items-start justify-start w-full gap-8">
								<div className="w-52 h-28 bg-gray rounded-lg flex justify-center items-center text-xl text-zinc-400">
									TBA
								</div>{" "}
								<div className="w-52 h-28 bg-gray rounded-lg flex justify-center items-center text-xl text-zinc-400">
									TBA
								</div>
							</div>
						</div>
					</div>

					{/*	<div className="flex-col w-[35vw] items-end justify-center hidden sm:flex">
						<img
							src="/images/secondary_bg.png"
							className="h-full select-none"
							alt=""
						/>
						<img
							src="/images/secondary_bg.png"
							className="h-[50vh] w-[35vw] select-none scale-y-[-1]"
							alt=""
						/>
					</div>*/}

				</div>
				<Footer />
			</div>
		</>
	);
}

const WinnerElement = ({
	text,
	prize,
	winner,
	image,
}: {
	text: string;
	prize: string;
	winner: string;
	image?: string;
}) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div
			onClick={(e) =>
				!((e.target as Element).id === "winners_photo") &&
				image &&
				setExpanded(!expanded)
			}
			className={`rounded-xl w-[90%] bg-gray2 px-4 flex-col items-center justify-center ${expanded ? "py-4" : "h-14"
				} ${image && "cursor-pointer"}`}
		>
			<div
				className={`flex justify-between items-center w-full ${!expanded && "h-full"
					}`}
			>
				<p className="text-xl">
					{text} <span className="text-tertiary">(Rs. {prize})</span>
				</p>
				<div className="flex justify-center items-center gap-4">
					<p style={{ color: "mediumpurple" }} className="text-2xl">
						{winner}
					</p>
					{image &&
						(expanded ? (
							<FiChevronUp size={20} className="text-tertiary cursor-pointer" />
						) : (
							<FiChevronDown
								size={20}
								className="text-tertiary cursor-pointer"
							/>
						))}
				</div>
			</div>
			{expanded && (
				<img
					id="winners_photo"
					src={image}
					alt=""
					className="pt-4 rounded-xl cursor-default"
				/>
			)}
		</div>
	);
};

const PrizeElement = ({ text, prize }: { text: string; prize: string }) => {
	return (
		<div className="rounded-xl w-[90%] h-14 px-4 flex items-center justify-between" style={{ backgroundColor: '#021402' }}>
			<p className="text-xl">{text}</p>
			<p className="text-2xl text-zinc-400">Cash Prizes TBD</p>
		</div>
	);
};


export const MainEvent = ({
	title,
	description,
	image
}: {
	title: string;
	description: string;
	image: string
}) => {
	return (
		<motion.div
			whileHover={{ scale: 1.015 }}
			transition={{ duration: 0.3 }}
			className="cursor-pointer flex flex items-center gap-16 justify-start w-full p-8 bg-gray rounded-[2rem] h-auto"
		>
			<div className="flex flex-col">
				<h2 className="w-full text-3xl font-semibold text-center sm:text-left">
					{title}
				</h2>
				<p className="mt-4 text-lg text-center sm:text-justify whitespace-pre-line">
					{description}
				</p>
			</div>
			<img
				src={image}
				alt="Coding"
				className="hidden sm:block w-[40%]"
			/>
		</motion.div>
	);
};



export const ImageWithText = ({ imageSrc, text }: { imageSrc: string; text: string }) => {
	return (
		<div className="w-full flex flex-col items-center justify-center bg-gray py-8">
			<div className="w-full max-w-screen-lg flex flex-col md:flex-row items-center justify-center md:justify-between px-8">
				<img src={imageSrc} alt="Image" className="w-full md:w-1/2 max-w-md rounded-lg shadow-lg mb-4 md:mb-0" />
				<p className="w-full md:w-1/2 md:ml-8 text-lg md:text-xl text-center md:text-left">{text}</p>
			</div>
		</div>
	);
};
