import { createSlice } from "@reduxjs/toolkit";
import elon from '../images/elon.jpeg'
import yashdhull from '../images/yashdhull.jpeg'
import crime from '../images/crime.jpeg'
import lata from '../images/lata.jpeg'
import jeff from '../images/jeff.jpeg'
import fishes from '../images/fishes.jpeg'
import mask from '../images/mask.jpg'
import instagram from '../images/instagram.jpeg'
import flying from '../images/flying.jpeg'
const initialState = {
    isEnglish: true,
    news: [
        {
        id: 1, 
        title: "19-yr-old tracking Elon Musk's jet refuses Tesla subscription offer to delete bot",
        image: elon,
        author: "Kiran Khatri",
        postedDate: "09:52 am on 06 Feb 2022,Sunday",
        text: `Jack Sweeney, the 19-year-old college student who runs a Twitter account to track world's richest person Elon Musk's private jet, refused to accept a Tesla to delete the bot. Car-hire company Autonomy's CEO Scott Painter offered Sweeney a three-year subscription to a Tesla Model 3. "If I got an actual Tesla, then I would take it down," Sweeney said.`,
        postedWebsite: "Business Insider India"
        },
        {
        id: 2, 
        title: "Proud moment for India: Captain Yash Dhull after winning U-19 World Cup",
        image: yashdhull,
        author: "Ankur Taliyan",
        postedDate: "09:12 am on 06 Feb 2022,Sunday",
        text: `After lifting the record-extending fifth Under-19 World Cup, India captain Yash Dhull said it's a proud moment for India. He added, "It was good batting and a good comeback by England. But we kept cool minds and focused." Dhull further said, "It's great being coached by VVS Laxman sir, Hrishikesh Kanitkar sir and others."`,
        postedWebsite: "ANI"
        },
        {
        id: 3, 
        title: "Man held for killing girlfriend, disfiguring her face with rock in Mumbai",
        image: crime,
        author: "Ria Kapoor",
        postedDate: "10:33 am on 06 Feb 2022,Sunday",
        text: `Mumbai Police arrested Zico, boyfriend of 28-year-old woman, who went missing from her house in Vile Parle (west) on night of January 24 and was later found murdered on February 3. Zico and deceased got into argument in early hours of January 25, after which, Zico strangled and stabbed her. He also smashed her face on rock to disfigure it.`,
        postedWebsite: ""
        },
        {
        id: 4, 
        title: "PM Narendra Modi to attend Lata Mangeshkar's funeral in Mumbai today",
        image: lata,
        author: "Sakshita Khosla",
        postedDate: "02:54 pm on 06 Feb 2022,Sunday",
        text: `PM Narendra Modi will travel to Mumbai to attend the last rites of veteran singer Lata Mangeshkar, who passed away on Sunday at the age of 92. "PM Modi will reach the funeral ground at around 5:45-6:00 pm today, after which Lata Mangeshkar ji's last rites will be conducted at around 6:15-6:30 pm," said BMC Commissioner Iqbal Singh Chahal.`,
        postedWebsite: "ANI"
        },
        {
        id: 5, 
        title: "Bezos gets richer by $19 bn in a day as Amazon adds record $191 bn in value",
        image: jeff,
        author: "Hiral Goyal",
        postedDate: "05:40 pm on 05 Feb 2022,Saturday",
        text: `Amazon Founder Jeff Bezos' net worth climbed by $18.8 billion on Friday after the e-commerce giant's shares soared nearly 14%. Bezos, the world's third-richest person, is now worth $183.5 billion, according to Forbes. Amazon added $191 billion to its market value in the biggest single-day gain in US market history after beating profit expectations for the fourth quarter.`,
        postedWebsite: "Business Insider India"
        },
        {
        id: 6, 
        title: "1,00,000 dead fish spilled by giant trawler off the coast of France, pics go viral",
        image: fishes,
        author: "Chetan Goyal",
        postedDate: "03:40 pm on 05 Feb 2022,Saturday",
        text: `Dutch-owned trawler FV Margiris, the world's second-biggest fishing vessel, has shed over 1,00,000 dead fish into the Atlantic Ocean off France. Sea Shepherd's French arm shared images of the spill, which covered an area of about 32,300 square feet, which have gone viral. France Fisheries Minister Annick Girardin described them as "shocking" and called for an investigation.`,
        postedWebsite: "The Independent"
        },
        {
        id: 7, 
        title: "Indian scientists develop self-disinfecting, washable COVID-19 masks",
        image: mask,
        author: "Ridham Gambhir",
        postedDate: "08:08 pm on 04 Feb 2022,Friday",
        text: `The Ministry of Science and Technology on Friday announced that a team of Indian scientists have developed a self-disinfecting antiviral mask to fight COVID-19. The mask is biodegradable, highly breathable and washable in nature. As per the ministry, it is coated with copper-based nanoparticles that are efficient against coronavirus as well as other viral and bacterial infections.`,
        postedWebsite: "Hindustan Times"
        },
        {
        id: 8, 
        title: "Instagram launches 'Take a Break' feature in India, allows users to set break reminders",
        image: instagram,
        author: "Arshiya Chopra",
        postedDate: "08:08 pm on 04 Feb 2022,Friday",
        text: `Instagram has launched its 'Take A Break' feature across the world, including India, months after it was rolled out in countries like US, UK, Ireland, Canada and Australia. The opt-in control enables users to receive in-app break reminders after a duration of their choosing. It's currently available for iOS devices and will roll out to Android in a few weeks.`,
        postedWebsite: "Money Control"
        },
        {
        id: 9, 
        title: "Flying car that can fly above 8,000 ft gets airworthiness certification in Slovakia",
        image: flying,
        author: "Pragya Swastikh",
        postedDate: "08:08 pm on 04 Feb 2022,Friday",
        text: `The Slovak Transport Authority has issued airworthiness certification to AirCar that can hit altitudes above 8,000 ft. It received the certification after 70 hours of test flight and more than 200 take off and landings. The flying car can transform from a car to an aircraft in 135 seconds.`,
        postedWebsite: "Money Control"
        },
    ]
}

export const newsSlice = createSlice({
    initialState,
    name: "news",
    reducers: {
        toggleLanguage: (state) => {
            state.isEnglish = state.isEnglish ? false : true
        }
    }
})

export const {toggleLanguage} = newsSlice.actions

export default newsSlice.reducer