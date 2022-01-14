const Movie = require('./models/movies')
const Show = require('./models/shows')
const mongoose = require('mongoose')

const mongoURL = 'mongodb://127.0.0.1:27017/crimeflix'
const db = mongoose.connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Seed Connected');
})

db.on('error', (err) => {console.log('error: ', err)})
db.on('connected', () => {console.log('connected')})
db.on('disconnected', () => {console.log('disconnected')})


const newMovies =
[
  {
    name: 'Wind River',
    img: 'https://npr.brightspotcdn.com/dims4/default/35a254c/2147483647/strip/true/crop/744x1103+0+0/resize/880x1305!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fwpr%2Ffiles%2F201711%2Fmovie_poster.jpg',
    img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ_fqlHXepslwom5ec-tXDksHGgIyT1a93iw&usqp=CAU',
    yearReleased: 2017,
    duration: '1h 47m',
    summary: "Cory Lambert is a wildlife officer who finds the body of an 18-year-old woman on an American Indian reservation in snowy Wyoming. When the autopsy reveals that she was raped, FBI agent Jane Banner arrives to investigate. Teaming up with Lambert as a guide, the duo soon find that their lives are in danger while trying to solve the mystery of the teen's death.",
    reviews: ["Jeremy Renners best performance to date, imo. Elizabeth Olsen, also amazing in this. Simply put, before I go on about everyone's performance individually, all the characters are played sooo well, just everyone. It's such a captivating movie. Even when not a lot is going on, just dailogue, you're glued to every word. It's one of those films that while you're watching it, you never want it to be over, you never want them to find out who dunnit, because then their story is over, and so is the movie. Some may not like the ending..so I've heard from a few people..but, I don't mind it. I think it's a good ending to Cory's story, bc remember, it's not just about the girl he finds out in the snow, (who he was also very close with) it's about his daughter, too. 10 outta 10 from me. Would recommend, and have, to any and everyone. It's such an important movie right now, too. Listen to the message, as well as enjoy the amazing performances."],
    likes: 880,
    dislikes: 120
  },
  {
    name: 'The Irishman',
    img: 'https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
    img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKG0BkPyk5bjRDY0oApL-OpmF_latUrOP3FA&usqp=CAU',
    yearReleased: 2019,
    duration: '3h 29m',
    summary: "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.",
    reviews: ["The acting was tremendous, gotta remember that these men have been working together since before many of us were born, this is evident to me in many scenes throughout this film.  This is not only the best acted film of the year,  but one of the best acted and directed films of all time. Scorcese does not miss details ever, every scene is perfect, every scene was probably shot 5-10 times.  You can tell they did not rush the making or editing of this film. It may be deniro best role in 25 years.  My only complaints were i thought bobby cannavalle and harvey keitel were so amazing in the film but they were not in it enough for me.  I would loved to see a bit more of them bc they were perfect in their portrayal of their roles.  I geuss my other complaint is that the focus is a lot more on the end of Sheehans life vs the beginning.  I would have liked to see more about his life as a young man and less about him dying.i do think part of this film deals with mortalityas a whole."],
    likes: 870,
    dislikes: 130
  },
  {
    name: 'Joker',
    img: 'https://i0.wp.com/bunker158.com/wp-content/uploads/2020/05/the-joker-2019-arthur-fleck-prime1-blitzway-bunker158-statue-1.jpg?fit=1060%2C1500&ssl=1',
    img2: 'https://gunaxin.us-east-1.linodeobjects.com/2019/10/joker-poster-560x315.jpg',
    yearReleased: 2019,
    duration: '2h 2m',
    summary: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
    reviews: ["A dark, visually beautiful and emotionally blistering origin story that gives one of the Batman universe's most legendary characters a chance in the spotlight. Origin stories aren't usually my cup of tea, but this one hit all the right notes for me. A big part of that is thanks to Todd Phillips' extraordinary - and very raw vision of Arthur, giving us a glimpse into the character's own personal battles, and although his actions are never justified, we get an understanding of the roots of Arthur's anger. But it's Joaquin Phoenix's spellbinding performance that takes the movie to another, and I can say without hesitation that this is the actor's greatest moment yet, bringing both empathy and real emotional weight, along with being genuinely frightening at times. If Heath Ledger was still around, it's likely that even he would've been completely mesmerized. But, on his own, Phoenix has created a complex character that's hard to forget, and he rightfully took home that Oscar for best actor. Overall, this is one of the greatest origin stories the movies have blessed us with."],
    likes: 910,
    dislikes: 90
  },
  {
    name: 'The Lincoln Lawyer',
    img:'https://m.media-amazon.com/images/M/MV5BMTQ4NDE4NTY5MV5BMl5BanBnXkFtZTcwODQyMTkxNA@@._V1_.jpg',
    img2: 'https://www.fetchtv.com.au/v2/vod/titles/5822/landscape_thumbnail/334x188',
    yearReleased: 2011,
    duration: '1h 59m',
    summary: "Mick Haller (Matthew McConaughey) is a charismatic defense attorney who does business out of his Lincoln Continental sedan. Mick spends most of his time defending petty crooks and other bottom-feeders, so it comes as quite a surprise when he lands the case of a lifetime: defending a Beverly Hills playboy (Ryan Phillippe) who is accused of attempted murder. However, what Mick initially thinks is an open-and-shut case with a big monetary reward develops into something more sinister.",
    reviews: ["The Lincoln Lawyer. This is one that I had on the backburner to watch, following up my disappointing encounter with Automata, I decided to pull in the big guns and check out this movie after it had been recommended by many of my friends and critics. I have to say I wasn't disappointed Matthew McConaughey delivered yet another amazing performance. The film grappled with very realistic themes and nepotism that I'm seeing in the air more prodominant in recent times. Despite a few of the storyline's loopholes, I do believe that the film had ties to modern society and the characters were adequately developed, delivering very majestic performances.  The script complemented the storyline and carried the dark undertones of violence against women and domestic violence. As a whole I very much enjoyed this movie, the casting was great and the story had me engrossed. 9/10."],
    likes: 800,
    dislikes: 200
  },
  {
    name: 'The Guilty',
    img: 'https://i.imgur.com/2rHueii.jpg',
    img2: 'https://bsmknighterrant.org/wp-content/uploads/2021/11/J44gJLHIkGQJSYIQbvZIrgWbhubWA2AVLPvqwKFA.jpeg',
    yearReleased: 2021,
    duration: '1h 30m',
    summary: "A troubled police detective demoted to 911 operator duty scrambles to save a distressed caller during a harrowing day of revelations -- and reckonings.",
    reviews: ["This movie left me speechless, the plot is amazing, good acting, overall a fantastic movie.But I want to tell you that it's not a joke, don't call 911 jokingly or if it's not really an emergency, it's very hard for dispatches, you have to be strong mentally, because what you hear may mark you. .so it's not a joke, they worked hard to keep us safe, not to make their job even harder.Back in the movie, before I saw it I said it wasn't a very interesting movie, but to give it a try ... and the movie impressed me, so emotionally, Jake Gyllenhaal's performance is mind-blowing, I was amazed when I seeing the performance, I felt his pain, despair, stress ... that's what I call an Oscar-worthy performance ... The soundtrack used is simple but very good, it manages to get you in a state of panic, fear, suspense ... I mean, I didn't make it to the original movie, but this amazing movie, a real roller coaster of emotions, the story is terrifying, and amazing, based on on true events."],
    likes: 720,
    dislikes: 280
  }
]

Movie.create(newMovies, (err, movies) => {
  if (err) {
    console.log(err);
  } else {
  console.log(movies);
  }
})



const newShows =
[
  {
    name: 'Peaky Blinders',
    img: 'https://flxt.tmsimg.com/assets/p11094767_b_v13_aa.jpg',
    img2: 'https://cdn.akamai.steamstatic.com/steam/apps/1013310/capsule_616x353.jpg?t=1617702082',
    yearReleased: 2013,
    seasons: 5,
    summary: "Britain is a mixture of despair and hedonism in 1919 in the aftermath of the Great War. Returning soldiers, newly minted revolutions and criminal gangs are fighting for survival in a nation rocked by economic upheaval. One of the most powerful gangs of the time is the Peaky Blinders, run by returning war hero Thomas Shelby and his family. But Thomas has bigger ambitions than just running the streets. When a crate of guns goes missing, he recognizes an opportunity to advance in the world because crime may pay but legitimate business pays better. Trying to rid Britain of its crime is Inspector Chester Campbell, who arrives from Belfast to try to achieve that goal.",
    reviews: ["I have recently completed the whole series  and I cannot stop praising about everything 'PEAKY BLINDERS'. Amazing direction, Unforgettable acting skills, Unreplaceable castings and on the top of all Editing, music, locations, background was superb. This series will grab your attention and make yourself indulge and addicted towards it in very short period of time. All the series if u watch continuously will not make any differences and unconnected by direction. Editors avoided unnecessary complexities of story and stay connected as story began. Talking about Cillian Murphy (Tommy Shelby) is an undeniable talented actor who plays with his expressions and make everyone fan of him, especially when his wife (Grace) dies. Anabelle Wallis (Grace) was beautiful and amazing character but I wanted to see her more part especially after separating from Tommy and gun shot. Polly (Helen McCrory) A woman who acted as being supporter, head of family, a mother, a mother-in-law and a caring woman shows all the roles through her expression. The lady is milestone. Arthur, John, Ada, Esme and other characters (main and side roles). The negative characters were too damn amazing. In the end, Its a worth watching show and definitely, nobody can regret after watching."],
    likes: 960,
    dislikes: 40,
    trailer: "https://www.youtube.com/embed/2nsT9uQPIrk"
  },
  {
    name: 'Mindhunter',
    img: 'https://www.tvguide.com/a/img/catalog/provider/1/1/1-7610120636.jpg',
    img2: 'https://www.thebulletintime.com/wp-content/uploads/2021/10/Mindhunter-Season-3.jpg',
    yearReleased: 2017,
    seasons: 2,
    summary: "Catching a criminal often requires the authorities to get inside the villain's mind to figure out how he thinks. That's the job of FBI agents Holden Ford and Bill Tench. They attempt to understand and catch serial killers by studying their damaged psyches. Along the way, the agents pioneer the development of modern serial-killer profiling. The crime drama has a strong pedigree behind the camera, with Oscar-nominated director David Fincher and Oscar-winning actress Charlize Theron among the show's executive producers.",
    reviews: ["Absolutely outstanding in every respect. Extremely well directed with meticulous attention to period (mid to late 70's) detail, Mindhunter is a tour de force in the field of criminal psychology. I love the combination of the academic relative rookie who wants to get inside the minds and motivations of serial killers juxtaposed with the world weary hard bitten veteran FBI agent. Neither character is in any way cliched and they work together superbly. Mindhunters also pays exceptional attention to character development and the story lines are always gripping, particularly when the team get involved in various grizzly murder investigations. The acting is also uniformly superb though for me the standout is Cameron Brittons' portrayal of the serial killer Edmund - a very different character but his acting is every bit as good as Anthony Hopkins as Dr. Lecter. Having binge watched series 1 and 2 I really hope that Netflix decides to continue with this. It's by far the best criminal psychology series that I've ever watched."],
    likes: 920,
    dislikes: 80,
    trailer: "https://www.youtube.com/embed/oFlKiTwhd38"
  },
  {
    name: 'Power',
    img: 'https://m.media-amazon.com/images/M/MV5BYjllZjcwNjItMzc1OC00YjRkLWI5YzUtODM1YmEzNjFiYzNhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg',
    img2: 'https://stz1.imgix.net/Web/contentId/21220/type/KEY/dimension/2560x1440/lang/en-US?auto=compress,format&w=510&fit=max',
    yearReleased: 2014,
    seasons: 6,
    summary: "It appears James 'Ghost' St. Patrick has it all -- a drop-dead gorgeous wife, a stunning Manhattan penthouse, and the power and success that come with owning hot new nightclub Truth. But a closer look reveals a man living a double life. When Ghost isn't tending to his Fortune 500 business, he's catering to clients of another operation: a drug empire that serves only the rich and influential. While loyal sidekick Tommy protects the cash-cow narcotics venture at all costs, Ghost's new reality is using Truth as more than a front to launder money. It's a way out of the drug game and into a legitimate life with his family, even if everything he loves becomes unknowingly threatened. 'Power' is co-executive produced by Curtis '50 Cent' Jackson (who also co-stars) and show creator Courtney Kemp Agboh ('The Good Wife').",
    reviews: ["Absolutely LOVE this show!!! Never seen it or heard of it before we found it then we've binged watched and we loved it! I Love Tommy think he's great anyone who wants to say anything about his acting is just being picky He's a white guy trying to act like he's black what do you expect lol But he's a true G that's for sure!!! Totally an utterly a stand-up guy, ghost on the other hand first I liked him but then he started getting shadier and shadier by the minute everybody got his back but he's always looking out for numero uno! Cannot wait to see how Tasha does with the kid at first I didn't agree with what she was doing but when you actually sit down and think about it she's right he's going to do it anyways so might as well teach him to do it the right way instead of him getting into trouble and stuff. And yes I agree 50s acting  is not the best But lala Anthony is way worse I wish they'd get rid of her she's loud she's annoying she's a crybaby trying to act like she's all hard and she ain't and she going to bring Tommy down Tommy should choke her out like he did Holly"],
    likes: 900,
    dislikes: 100,
    trailer: "https://www.youtube.com/embed/jfXbEx_nq3A"
  },
  {
    name: 'Money Heist',
    img: 'https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg',
    img2: 'https://ntvb.tmsimg.com/assets/p17710222_b_h8_aa.jpg?w=1280&h=720',
    yearReleased: 2017,
    seasons: 5,
    summary: "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.",
    reviews: ["The biggest Heist in the history. This is probably Netflix’s best and the most successful original show. In a bold story made up, full of original ideas, excellent acting, a lot of tense moments cleverly woven with funny moments- this is the jewel in the Netflix crown. The thing that keeps this show interesting is the fact that 3 different taking place at same time and three different places - The Inspector, The professor and the Heist. GREAT!! With its unpredictable and overwhelming plot, this series so addictive that one will definitely complete it in binge watch. I have been watching it since 2 days without a break. Haha! And eating like crazy. The series revolves around a very strong, mysterious, genius yet very kind man name Sergio Martinez(The Professor) who spends half of his life planning the biggest robbery in the history with a very dangerous but capable crew. Really love the strong bond between the crew. Tokyo and Nairobi my favourite ones and ohhh How can I forget The inspector? She is super dooper great at doing justice to her character. Even in my dreams last night I was into this Heist with my friend Haha! The series just gets better and better from part one to part 2, then part 3 and part 4 is even better. I can't just wait for part 5 to come. Masterpiece indeed! Totally worth the time, attention and goosebumps throughout the series! Must watch. Are you getting bored? Don’t get bored, go sign in Netflix and watch this amazing show!"],
    likes: 910,
    dislikes: 90,
    trailer: "https://www.youtube.com/embed/_InqQJRqGW4"
  },
  {
    name: 'Breaking Bad',
    img: 'https://flxt.tmsimg.com/assets/p185846_b_v8_ad.jpg',
    img2: 'https://images.indianexpress.com/2018/01/breaking-bad-759.jpg',
    yearReleased: 2017,
    seasons: 5,
    summary: "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.",
    reviews: ["The biggest Heist in the history. This is probably Netflix’s best and the most successful original show. In a bold story made up, full of original ideas, excellent acting, a lot of tense moments cleverly woven with funny moments- this is the jewel in the Netflix crown. The thing that keeps this show interesting is the fact that 3 different taking place at same time and three different places - The Inspector, The professor and the Heist. GREAT!! With its unpredictable and overwhelming plot, this series so addictive that one will definitely complete it in binge watch. I have been watching it since 2 days without a break. Haha! And eating like crazy. The series revolves around a very strong, mysterious, genius yet very kind man name Sergio Martinez(The Professor) who spends half of his life planning the biggest robbery in the history with a very dangerous but capable crew. Really love the strong bond between the crew. Tokyo and Nairobi my favourite ones and ohhh How can I forget The inspector? She is super dooper great at doing justice to her character. Even in my dreams last night I was into this Heist with my friend Haha! The series just gets better and better from part one to part 2, then part 3 and part 4 is even better. I can't just wait for part 5 to come. Masterpiece indeed! Totally worth the time, attention and goosebumps throughout the series! Must watch. Are you getting bored? Don’t get bored, go sign in Netflix and watch this amazing show!"],
    likes: 910,
    dislikes: 90,
    trailer: "https://www.youtube.com/embed/_InqQJRqGW4"
  }
]

Show.create(newShows, (err, shows) => {
  console.log(shows);
})
