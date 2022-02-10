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
import charles from '../images/charles.jpeg'
import falguni from '../images/falguni.jpeg'
import virat from '../images/virat.jpeg'
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
        postedWebsite: "Business Insider India",
        categories: ["All News", "World", "Startup"],
        language: "English"
        },
        {
        id: 2, 
        title: "Proud moment for India: Captain Yash Dhull after winning U-19 World Cup",
        image: yashdhull,
        author: "Ankur Taliyan",
        postedDate: "09:12 am on 06 Feb 2022,Sunday",
        text: `After lifting the record-extending fifth Under-19 World Cup, India captain Yash Dhull said it's a proud moment for India. He added, "It was good batting and a good comeback by England. But we kept cool minds and focused." Dhull further said, "It's great being coached by VVS Laxman sir, Hrishikesh Kanitkar sir and others."`,
        postedWebsite: "ANI",
        categories: ["All News", "India", "Sports"],
        language: "English"
        },
        {
        id: 3, 
        title: "Man held for killing girlfriend, disfiguring her face with rock in Mumbai",
        image: crime,
        author: "Ria Kapoor",
        postedDate: "10:33 am on 06 Feb 2022,Sunday",
        text: `Mumbai Police arrested Zico, boyfriend of 28-year-old woman, who went missing from her house in Vile Parle (west) on night of January 24 and was later found murdered on February 3. Zico and deceased got into argument in early hours of January 25, after which, Zico strangled and stabbed her. He also smashed her face on rock to disfigure it.`,
        postedWebsite: "",
        categories: ["All News", "India"],
        language: "English"
        },
        {
        id: 4, 
        title: "PM Narendra Modi to attend Lata Mangeshkar's funeral in Mumbai today",
        image: lata,
        author: "Sakshita Khosla",
        postedDate: "02:54 pm on 06 Feb 2022,Sunday",
        text: `PM Narendra Modi will travel to Mumbai to attend the last rites of veteran singer Lata Mangeshkar, who passed away on Sunday at the age of 92. "PM Modi will reach the funeral ground at around 5:45-6:00 pm today, after which Lata Mangeshkar ji's last rites will be conducted at around 6:15-6:30 pm," said BMC Commissioner Iqbal Singh Chahal.`,
        postedWebsite: "ANI",
        categories: ["All News", "India", "Politics"],
        language: "English"
        },
        {
        id: 5, 
        title: "Bezos gets richer by $19 bn in a day as Amazon adds record $191 bn in value",
        image: jeff,
        author: "Hiral Goyal",
        postedDate: "05:40 pm on 05 Feb 2022,Saturday",
        text: `Amazon Founder Jeff Bezos' net worth climbed by $18.8 billion on Friday after the e-commerce giant's shares soared nearly 14%. Bezos, the world's third-richest person, is now worth $183.5 billion, according to Forbes. Amazon added $191 billion to its market value in the biggest single-day gain in US market history after beating profit expectations for the fourth quarter.`,
        postedWebsite: "Business Insider India",
        categories: ["All News", "World", "Business"],
        language: "English"
        },
        {
        id: 6, 
        title: "1,00,000 dead fish spilled by giant trawler off the coast of France, pics go viral",
        image: fishes,
        author: "Chetan Goyal",
        postedDate: "03:40 pm on 05 Feb 2022,Saturday",
        text: `Dutch-owned trawler FV Margiris, the world's second-biggest fishing vessel, has shed over 1,00,000 dead fish into the Atlantic Ocean off France. Sea Shepherd's French arm shared images of the spill, which covered an area of about 32,300 square feet, which have gone viral. France Fisheries Minister Annick Girardin described them as "shocking" and called for an investigation.`,
        postedWebsite: "The Independent",
        categories: ["All News", "World"],
        language: "English"
        },
        {
        id: 7, 
        title: "Indian scientists develop self-disinfecting, washable COVID-19 masks",
        image: mask,
        author: "Ridham Gambhir",
        postedDate: "08:08 pm on 04 Feb 2022,Friday",
        text: `The Ministry of Science and Technology on Friday announced that a team of Indian scientists have developed a self-disinfecting antiviral mask to fight COVID-19. The mask is biodegradable, highly breathable and washable in nature. As per the ministry, it is coated with copper-based nanoparticles that are efficient against coronavirus as well as other viral and bacterial infections.`,
        postedWebsite: "Hindustan Times",
        categories: ["All News", "India", "Science", "Technology"],
        language: "English"
        },
        {
        id: 8, 
        title: "Instagram launches 'Take a Break' feature in India, allows users to set break reminders",
        image: instagram,
        author: "Arshiya Chopra",
        postedDate: "08:08 pm on 04 Feb 2022,Friday",
        text: `Instagram has launched its 'Take A Break' feature across the world, including India, months after it was rolled out in countries like US, UK, Ireland, Canada and Australia. The opt-in control enables users to receive in-app break reminders after a duration of their choosing. It's currently available for iOS devices and will roll out to Android in a few weeks.`,
        postedWebsite: "Money Control",
        categories: ["All News", "India", "Entertainment", "Technology"],
        language: "English"
        },
        {
        id: 9, 
        title: "Flying car that can fly above 8,000 ft gets airworthiness certification in Slovakia",
        image: flying,
        author: "Pragya Swastikh",
        postedDate: "08:08 pm on 04 Feb 2022,Friday",
        text: `The Slovak Transport Authority has issued airworthiness certification to AirCar that can hit altitudes above 8,000 ft. It received the certification after 70 hours of test flight and more than 200 take off and landings. The flying car can transform from a car to an aircraft in 135 seconds.`,
        postedWebsite: "Money Control",
        categories: ["All News", "India", "Business", "Technology", "Automobile"],
        language: "English"
        },
        {
        id: 10, 
        title: "यूके के प्रिंस चार्ल्स दूसरी बार हुए कोविड-19 पॉज़िटिव",
        image: charles,
        author: "शुभम गुप्ता",
        postedDate: "06:40 pm on 10 Feb 2022,Thursday",
        text: `क्लेरेंस हाउस ने गुरुवार को बताया कि ब्रिटेन के प्रिंस चार्ल्स दूसरी बार कोविड-19 पॉज़िटिव हुए हैं और फिलहाल सेल्फ आइसोलेशन में हैं। क्लेरेंस हाउस द्वारा जारी बयान में कहा गया, "विनचेस्टर में आज के कार्यक्रम में शामिल न होने को लेकर प्रिंस चार्ल्स बहुत निराश हैं और वह जल्द-से-जल्द अपनी यात्रा को पुनर्निर्धारित करने की कोशिश करेंगे।"`,
        postedWebsite: "Mirror",
        categories: ["All News", "World"],
        language:"Hindi"
        },
        {
        id: 11, 
        title: "50 वर्ष की उम्र में रिटेल, ब्यूटी और फैशन में अनुभव के बिना नायका शुरू की थी: फाउंडर फाल्गुनी",
        image: falguni,
        author: "जय शंकर ठाकुर",
        postedDate: "03:59 pm on 10 Nov 2021,Wednesday",
        text: `नायका के शेयर सूचीबद्ध होने के मौके पर संस्थापक फाल्गुनी नायर (58) ने कहा है, "मैंने रिटेल, टेक्नोलॉजी, ब्यूटी और फैशन में अनुभव के बिना 50 वर्ष की उम्र में नायका की स्थापना की थी।" उन्होंने कहा, "मैं आशा करती हूं कि भारत में जन्मा, भारतीय स्वामित्व वाला व भारतीय द्वारा प्रबंधित...नायका का यह सफर सभी को प्रेरित करेगा।"`,
        postedWebsite: "Facebook",
        categories: ["All News", "India", "Startup"],
        language:"Hindi"
        },
        {
        id: 12, 
        title: "विराट-अनुष्का ने प्लांट बेस्ड मीट स्टार्टअप में किया निवेश, कहा- मांस का स्वाद याद आता है",
        image: virat,
        author: "जय शंकर ठाकुर",
        postedDate: "08:08 pm on 04 Feb 2022,Friday",
        text: `क्रिकेटर विराट कोहली और अभिनेत्री अनुष्का शर्मा ने मुंबई के प्लांट बेस्ड मीट स्टार्टअप ब्लू ट्राइब में निवेश किया है। पति-पत्नी ने कहा, "हम प्लांट बेस्ड आहार लेंगे और मांस नहीं खाएंगे।" उन्होंने कहा, "हमने ऐसा केवल पशुओं के प्रति प्यार के लिए नहीं बल्कि पर्यावरण के लिए भी किया है...हमें कभी-कभी मांस का स्वाद याद आता है।"`,
        postedWebsite: "Money Control",
        categories: ["All News", "India", "Sports", "Entertainment", "Startup", "Business"],
        language:"Hindi"
        },
    ]
}

export const newsSlice = createSlice({
    initialState,
    name: "news",
    reducers: {
        toggleLanguage: (state, action) => {
            state.isEnglish = action.payload.isEnglish ? false : true
        },
        filterNews: (state, action) => {
            state.news = initialState.news.filter( (item) => 
                {
                    return item.language===action.payload.language && item.categories.includes(action.payload.category)
                }
            )
        },
        filterLanguage: (state,action) => {
            
            state.news = initialState.news.filter( (item) => 
            {
                return item.language===action.payload.language}
            )
        }
    }
})

export const {toggleLanguage, filterNews, filterLanguage} = newsSlice.actions

export default newsSlice.reducer