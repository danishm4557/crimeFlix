const Movie = require('./models/movies')
const Show = require('./models/shows')
const mongoose = require('mongoose')

// old cluster -- deleted
// const mongoURL = 'mongodb+srv://danishm4557:atlas0786@cluster0.zsftl.mongodb.net/crimeFlix?retryWrites=true&w=majority'
// new cluster -- 01/29/2025
const mongoURL = 'mongodb+srv://danishm4557:atlas0786@crimeflix.zsftl.mongodb.net/?retryWrites=true&w=majority&appName=crimeflix'
const db = mongoose.connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('Seed Connected');
})

db.on('error', (err) => { console.log('error: ', err) })
db.on('connected', () => { console.log('connected') })
db.on('disconnected', () => { console.log('disconnected') })


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
      dislikes: 120,
      trailer: "https://www.youtube.com/embed/s7WuKdVhrmA"
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
      dislikes: 130,
      trailer: "https://www.youtube.com/embed/WHXxVmeGQUc"
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
      dislikes: 90,
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
      name: 'The Lincoln Lawyer',
      img: 'https://m.media-amazon.com/images/M/MV5BMTQ4NDE4NTY5MV5BMl5BanBnXkFtZTcwODQyMTkxNA@@._V1_.jpg',
      img2: 'https://www.fetchtv.com.au/v2/vod/titles/5822/landscape_thumbnail/334x188',
      yearReleased: 2011,
      duration: '1h 59m',
      summary: "Mick Haller (Matthew McConaughey) is a charismatic defense attorney who does business out of his Lincoln Continental sedan. Mick spends most of his time defending petty crooks and other bottom-feeders, so it comes as quite a surprise when he lands the case of a lifetime: defending a Beverly Hills playboy (Ryan Phillippe) who is accused of attempted murder. However, what Mick initially thinks is an open-and-shut case with a big monetary reward develops into something more sinister.",
      reviews: ["The Lincoln Lawyer. This is one that I had on the backburner to watch, following up my disappointing encounter with Automata, I decided to pull in the big guns and check out this movie after it had been recommended by many of my friends and critics. I have to say I wasn't disappointed Matthew McConaughey delivered yet another amazing performance. The film grappled with very realistic themes and nepotism that I'm seeing in the air more prodominant in recent times. Despite a few of the storyline's loopholes, I do believe that the film had ties to modern society and the characters were adequately developed, delivering very majestic performances.  The script complemented the storyline and carried the dark undertones of violence against women and domestic violence. As a whole I very much enjoyed this movie, the casting was great and the story had me engrossed. 9/10."],
      likes: 800,
      dislikes: 200,
      trailer: "https://www.youtube.com/embed/IFwE3UgCMIk"
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
      dislikes: 280,
      trailer: "https://www.youtube.com/embed/NaB_ERMAZu4"
    },
    {
      name: 'Law Abiding Citizen',
      img: 'https://flxt.tmsimg.com/assets/p3632501_p_v10_ai.jpg',
      img2: 'https://i.ytimg.com/vi/i7lvbHFTGcw/maxresdefault.jpg',
      yearReleased: 2009,
      duration: '1h 49m',
      summary: "Clyde Shelton (Gerard Butler) is an honorable family man, until the day his wife and daughter are murdered in a home invasion. He hopes for justice, but a rising prosecutor named Nick Rice (Jamie Foxx) cuts a deal with one of the killers in exchange for testimony. Ten years later, that man is found dead and Shelton coolly admits his guilt. Then he hands Rice an ultimatum: Fix the broken legal system or suffer the consequences.",
      reviews: ["Outstanding film, the low reviews I'm seeing are ridiculous. This is an extremely well written film which brings the audience into a very dark and unforgiving world of sinister mayhem. A man trying to live out his best days with his family has his world completely decimated with a home break in that leaves his wife raped and murdered and his daughter killed as well. As the perpetrators are sent to prison, the accomplice receives the death sentence and the main antagonist gets ten years."],
      likes: 870,
      dislikes: 130,
      trailer: "https://www.youtube.com/embed/LX6kVRsdXW4"
    },
    {
      name: 'American Gangster',
      img: 'https://upload.wikimedia.org/wikipedia/en/9/9f/American_Gangster_poster.jpg',
      img2: 'https://www.historyvshollywood.com/reelfaces/americangangster/social.jpg',
      yearReleased: 2007,
      duration: '2h 56m',
      summary: "Harlem drug dealer Frank Lucas rises to power in corrupt 1970s New York, equalling and surpassing the notorious Mafia families with the reach of his empire. On the other side of the law, honest cop Richie Roberts dedicates himself to taking down `the most dangerous man walking the streets'. Lucas acts with impunity, smuggling heroin into the US in the coffins of American soldiers killed in Vietnam.",
      reviews: ["American Gangster is fantastic movie with a really well developed storyline and a very talented cast. Denzel Washington and Russell Crowe both matched their characters perfectly, which I was surprised with because they both don't seem like characters they were used to playing, it was also a different movie for director Ridley Scott, and he did a very impressive job with it. The character development in this movie is practically perfect, you must follow Russell Crowe and Denzel Washington's characters, and I didn't feel like they left out a lot of information and really took their time letting use get to know these characters. I would highly recommend American Gangster for all fans of gangster crime films. Set during the seventies, Richie Roberts (Russell Crowe) will stop at nothing to bring down the massive drug business of the dangerous and highly wanted Frank Lucas (Denzel Washington)."],
      likes: 900,
      dislikes: 100,
      trailer: "https://www.youtube.com/embed/BV_nssS6Zkg"
    },
    {
      name: 'Night Crawler',
      img: 'https://m.media-amazon.com/images/M/MV5BN2U1YzdhYWMtZWUzMi00OWI1LWFkM2ItNWVjM2YxMGQ2MmNhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg',
      img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzNCpoCkhWRvPEPVNsrfAAAKrtWOxjHYFORGp0iRSMRIWBtQ3JS-PdaB1s09WjdsaUcI&usqp=CAU',
      yearReleased: 2014,
      duration: '1h 57m',
      summary: "Los Angeles denizen Louis Bloom (Jake Gyllenhaal) survives by scavenging and petty theft. He stumbles into a new career as a cameraman and -- armed with a camcorder and police scanner -- begins nocturnal forays across the city in search of shocking and grisly crimes. When he catches the eye of a shopworn news director (Rene Russo) who welcomes the chance to raise her station's ratings, Louis goes to increasingly greater lengths to catch the 'money shot.'",
      reviews: ["This film has got to have one of the finest screenplays I have seen in a very long time. Lou, played by Jake Gyllenhaal deserves a place among the best anti-heroes on screen."],
      likes: 900,
      dislikes: 100,
      trailer: "https://www.youtube.com/embed/X8kYDQan8bw"
    },
    {
      name: 'Patriots Day',
      img: 'https://timespacewarps.files.wordpress.com/2018/05/patriots_day_onesheet_au_lr.jpg',
      img2: 'http://image.tmdb.org/t/p/w780/9Pu9JXKs93Q3hhnKAvHtfap1hl5.jpg',
      yearReleased: 2016,
      duration: '2h 13m',
      summary: "Tragedy strikes on April 15, 2013, when two bombs explode during the Boston Marathon. In the aftermath of the attack, police Sgt. Tommy Saunders (Mark Wahlberg), FBI Special Agent Richard DesLauriers (Kevin Bacon) and Commissioner Ed Davis (John Goodman) join courageous survivors, first responders and other investigators in a race against the clock to hunt down the suspects and bring them to justice.",
      reviews: ["Patriots Day recounts the events of the Boston Marathon bombing in 2013, which killed 3 people & injured, badly, hundreds. It is of course therefore a sensitive subject. Chronologically it has been handled what seems accurately enough & the film comes across as well produced. Extra kudos goes to the makeup artists & special effects units. The film is convincing & feels realistic, leaving a sickening feeling for the watcher."],
      likes: 800,
      dislikes: 200,
      trailer: "https://www.youtube.com/embed/KJXqh2rDehg"
    },
    {
      name: 'Training Day',
      img: 'https://flxt.tmsimg.com/assets/p28363_p_v10_ag.jpg',
      img2: 'https://hbomax-images.warnermediacdn.com/images/GX07gpQFBrLCttQEAAAH-/tileburnedin?size=1280x720&partner=hbomaxcom&v=162df92396114a3628c0b500128fc600&host=artist.api.cdn.hbo.com&w=1280',
      yearReleased: 2001,
      duration: '2h 2m',
      summary: "Police drama about a veteran officer who escorts a rookie on his first day with the LAPD's tough inner-city narcotics unit. 'Training Day' is a blistering action drama that asks the audience to decide what is necessary, what is heroic and what crosses the line in the harrowing gray zone of fighting urban crime. Does law-abiding law enforcement come at the expense of justice and public safety? If so, do we demand safe streets at any cost?",
      reviews: ["Denzel is the devil himself. Deservedly won the oscar. I think it’s the only movie where I’ve seen him play the bad guy and he has fun with the role like it’s his very last. Its almost as if the producers of The Shield based their tv show off this film as Vic Mackey is kind of like the tv version of Alonzo Harris - Alonzo is sexy, charming, slick, intelligent and cunning. Denzel is so likeable despite being such a scumbag of a character that you almost want to see him get away with it all. You can also see how a good man in the police force can become corrupt - the temptation to make ridiculous amounts of illegal money is presented in front of cops daily in the form of drug and cash seizures - Alonzo could have begun his career just like Jake - naive and idealistic but over time could have easily given himself over to temptation - cops need to make a living and sometimes that living can easily outweigh the salaries they make."],
      likes: 920,
      dislikes: 80,
      trailer: "https://www.youtube.com/embed/DXPJqRtkDP0"
    },
    {
      name: 'The Highwaymen',
      img: 'https://m.media-amazon.com/images/M/MV5BZmM5Y2QzOGQtNTdjZS00NDVhLThkYjItZjZiMjk4YjM0ZTUzXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg',
      img2: 'http://cdn.shopify.com/s/files/1/1183/1920/articles/276BEF5A-79C8-4CCE-9F24-93FA06065A09_1024x1024.jpeg?v=1555210031',
      yearReleased: 2019,
      duration: '2h 12m',
      summary: "Former Texas Rangers Frank Hamer and Maney Gault come out of retirement and join forces to try and apprehend notorious outlaws Bonnie Parker and Clyde Barrow.",
      reviews: ["DTopnotch motion picture with the lead actors in the best performances of their fine cinematic career. Fine movie direction and very scenic cinematography and set design. It is very atmospheric and even nostalgic for those 1930s years, even at the depth of depression yet with a simpler and more idealistic America, with lawmen, as always, doing their job and carrying out their duty selflessly, with their lives often at great risk. I do admire greatly Kevin Costner and Woody Harrelson, and the direction by John Lee Hancock was also great. I've watched it several times and still am looking forward to watch it again. I knew about Bonnie and Clyde from way back and am happy that at last the true story of Frank Hamer and Maney Gault and their relentless chase of  bank robbers/killers is eventually told and depicted. "],
      likes: 860,
      dislikes: 140,
      trailer: "https://www.youtube.com/embed/aH6vC-BBKOc"
    },
    {
      name: 'Jack Reacher',
      img: 'https://m.media-amazon.com/images/I/91OXktfnsUL._SY679_.jpg',
      img2: 'https://keeperfacts.com/wp-content/uploads/2021/09/Jack-Reacher-3-1.jpg',
      yearReleased: 2012,
      duration: '2h 10m',
      summary: "One morning in an ordinary town, five people are shot dead in a seemingly random attack. All evidence points to a single suspect: an ex-military sniper who is quickly brought into custody. The man's interrogation yields one statement: Get Jack Reacher (Tom Cruise). Reacher, an enigmatic ex-Army investigator, believes the authorities have the right man but agrees to help the sniper's defense attorney (Rosamund Pike). However, the more Reacher delves into the case, the less clear-cut it appears.",
      reviews: ["I've seen it a number of times.  Excellent movie.  Well acted.  Was not a Cruise fan until recently.  He is excellent here.  Great car scene.  Plot exc.  Nice to have a hero without money or family or home, in other words, free.  Plus in his scrapes you know he will prevail.  Different kind of hero, but cool.  Nice at the end, on his usual transport, the bus, that he gets up to help the lady with an abusive hysband."],
      likes: 860,
      dislikes: 140,
      trailer: "https://www.youtube.com/embed/rV6Z5KUja4k"
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
      yearReleased: 2008,
      seasons: 5,
      summary: "Mild-mannered high school chemistry teacher Walter White thinks his life can't get much worse. His salary barely makes ends meet, a situation not likely to improve once his pregnant wife gives birth, and their teenage son is battling cerebral palsy. But Walter is dumbstruck when he learns he has terminal cancer. Realizing that his illness probably will ruin his family financially, Walter makes a desperate bid to earn as much money as he can in the time he has left by turning an old RV into a meth lab on wheels.",
      reviews: ["Over the course of five years, Vince Gilligan and his friends have constructed a world piece by piece, with attention to detail worthy of a Faberge egg. They created a compelling protagonist, a deeply flawed yet charismatic genius. They built a business at which he had savant-like skills, and depicted the family that often drove him crazy. Then blurred lines between the two. And in that way created a life for Walter White that many of us can relate to. But other great and groundbreaking TV dramas had done something similar, most notably David Chase’s The Sopranos, David Simon’s The Wire, and David Milch’s Deadwood. But Breaking Bad did something those iconic shows didn’t do. Show runner Vince Gilligan set his protagonist in motion."],
      likes: 960,
      dislikes: 40,
      trailer: "https://www.youtube.com/embed/HhesaQXLuRY"
    },
    {
      name: 'Unabomber',
      img: 'https://mattsviews.files.wordpress.com/2020/07/loadtv10.jpg',
      img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xeqEnaLpQZ39wDl1eLv86zBITAqS7bCP22-zXAPRNJXONihfGUxm0A72aawKcSJ9euo&usqp=CAU',
      yearReleased: 2020,
      seasons: 1,
      summary: "Examining the life, actions and philosophy of Ted Kaczynski, aka the Unabomber, including excerpts from the only in-depth interview he has given, as well as input from family and friends.",
      reviews: ["This was as well-crafted a documentary just like the Unabomber's more advanced mail bombs; high quality. This film follows the Unabomber from childhood to recluse and settles into chronologically revealing his quickly advancing bomb making process through the year, which started about once a year in the beginning. After a large gap, he reemerges with gusto and uses more advanced techniques. Who are his targets? Oddly they are scientists, technology engineers and professors. Once light is shone onto his well-articulated writing, you'll understand he was against the massive technological system within society and the stresses it puts on human beings. This culminates into his infamous manifesto published in all the major newspapers used as blackmail. His story is well-told and edited nicely to keep the pace clipping along. There are a decent amount of clips of him speaking, which are pretty rare apparently. Perhaps the film's title oversold that point."],
      likes: 930,
      dislikes: 60,
      trailer: "https://www.youtube.com/embed/nsd_LMDlzhI"
    },
    {
      name: 'Ozark',
      img: 'data:image/jpeg;base64,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',
      img2: 'https://www.whats-on-netflix.com/wp-content/uploads/2018/12/Ozark-Season-3-Netflix.jpg',
      yearReleased: 2017,
      seasons: 4,
      summary: "Created by Bill Dubuque ('The Accountant,' 'The Judge'), this drama series stars Jason Bateman as Marty Byrde, a financial planner who relocates his family from Chicago to a summer resort community in the Ozarks. With wife Wendy and their two kids in tow, Marty is on the move after a money-laundering scheme goes wrong, forcing him to pay off a substantial debt to a Mexican drug lord in order to keep his family safe. While the Byrdes' fate hangs in the balance, the dire circumstances force the fractured family to reconnect.",
      reviews: ["Do not let the lukewarm reviews fool you for one moment- Ozark is a masterfully crafted crime thriller that hits all the right notes and refuses to dial down the tension for even a second. More importantly, Ozark achieves a quite simple feat that most of its predecessors and competitors can't- it's good to watch. The way one scene flows into another, you just truly want to keep watching till there's no more left and then you want some more- just because you're having a good time. I can't remember the last time a show did that for me."],
      likes: 810,
      dislikes: 190,
      trailer: "https://www.youtube.com/embed/5hAXVqrljbs"
    },
    {
      name: 'Making a Murderer',
      img: 'https://assets.vogue.com/photos/589130fd69f0c3501f1dd248/master/pass/making-a-murderer.jpg',
      img2: 'https://upload.wikimedia.org/wikipedia/en/8/83/Making_a_Murderer_titlecard.jpg',
      yearReleased: 2015,
      seasons: 2,
      summary: "Exonerated after spending nearly two decades in prison for a crime he did not commit, Steven Avery filed suit against Manitowoc County, Wis., and several individuals involved with his arrest. Shortly after, however, Avery found himself behind bars again, this time accused of the murder of 25-year-old photographer Teresa Halbach. She was last seen on Avery's property, where she was to photograph a vehicle. Avery and nephew Brendan Dassey were tried and (spoiler alert) convicted of the crime. But that's not the end of the story. When Columbia graduate students Laura Ricciardi and Moira Demos read about Avery, they felt his story would make an interesting documentary. Neither PBS nor HBO were interested, but Netflix took on their concept to produce the docuseries, which generated plenty of publicity and prompted petitions to have Avery's case reviewed, though officials in Wisconsin insist all the evidence is not presented in the program.",
      reviews: ["Fearfully, I avoided watchiing this for a while but once I started, I was compelled to continue to the bitter end with waves of emotions from horror at the sheer injustice and the absolute tunnel vision in the prosecution teams, to satisfaction and admiration for those who took the time to defend such a case of injustice. It is imperative in life that we take a step back and look at ourselves from another persons viewpoint to obtain clarity of truth and the benefit of humility.  It takes a very big person to admit wrongdoing and it takes a narcasistic person to ensure that no matter how much opposition there is, insisting that one is right if only to save face or defend the code. Astounding yet factual that we live in a world where people sign contracts t protect and honour and become enveloped by egocentic power which removes the very sense of humanity that should be the reason for taking the öath' to protect. others.  When Mrs Zellner herself explains the realization she had when she first begaan in law that the power vested in her was enourmous and that she had the power to change one life was the very 'ping moment' that makes or breaks a person.  She chose the upstream path which is fraught with adversary but stands her ground with a calm but firm foundation.  This is the true meaning of honour.  No airs and graces just raw honesty and dedication."],
      likes: 910,
      dislikes: 90,
      trailer: "https://www.youtube.com/embed/qxgbdYaR_KQ"
    },
    {
      name: 'Narcos',
      img: 'https://flxt.tmsimg.com/assets/p11993086_b_v13_ag.jpg',
      img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqny_8pGukTb0vxg0Um1g19djY64CUf6tLMA&usqp=CAU',
      yearReleased: 2015,
      seasons: 3,
      summary: "Netflix chronicles the rise of the cocaine trade in Colombia and the gripping real-life stories of drug kingpins of the late '80s in this raw, gritty original series. Also detailed are the actions taken by law enforcement as they battle in the war on drugs, targeting notorious and powerful figures that include drug lord Pablo Escobar. As efforts are made to control cocaine, one of the world's most valuable commodities, the many entities involved -- legal, political, police, military and civilian -- find themselves in conflict.",
      reviews: ["I've loved watching drug lord shows and movies such as 'Good Fellas', I didn't have any idea I would be addicted to this show as much as I am. You do have to read subtitles because it hops back and forth from english to spanish but honestly? Its given me an appreciation for the launguage and I actually like it and prefer for the subtitles to be there so I can listen to them speak spanish, Ive even learned how to say mother f***ers' in spanish haha And many other words as well, its a really good show and the naracter tells you whats going on and who everyone is so you arent lost and googling the whole time of 'who is this person' and 'what does this mean.' They really explain it so everyone understands whats really going on so there is no confusion. The only thing I thought was confusing is that they didn't show the birth of the son and I thought for a while they adopted him? I have looked it up though and it is their son I just feel like they should have included his birth as well theres alot of nudity lots of cursing, its for sure an adult show and should not be shown to younger kids, theres alot of shooting and killing as well and they dont censor at all which I like because it keeps you in the moment and you can imagine being there watching it in real life.."],
      likes: 910,
      dislikes: 90,
      trailer: "https://www.youtube.com/embed/1lKLgzi6STw"
    },
    {
      name: 'Fargo',
      img: 'https://www1.filmplanet.to/wp-content/uploads/2020/05/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg',
      img2: 'https://m.media-amazon.com/images/M/MV5BNzFhZjU3ZGUtN2NmMC00MDFiLTllOGYtOGUwOWJiNTkxMGUwXkEyXkFqcGdeQW1pYnJ5YW50._V1_.jpg',
      yearReleased: 2014,
      seasons: 4,
      summary: "In this anthology series inspired by the 1996 film, each season follows a mostly new cast of characters who get involved with murder investigations in different Midwestern towns, with seemingly unrelated crimes sometimes being connected in some way.",
      reviews: ["Inspired by the 1996 academy award winner film, directed by Coen brothers of its namesake, Fargo is a crime drama anthology with 3 seasons, each season being a different story, having different characters except for a few overlaps. With each season being a mini-series in its own, the pace is sufficiently satisfactory. Although you might find season 3 a bit slow, the ingenious plot totally makes up for it. Honestly I found this series quite easy to binge watch. The story line is tight and absolutely unpredictable with marvelous surprises and number of twists thrown in your way as it makes its way through snow clad ‘Minnesota nice’. Bloody, gruesome murders with bodies being disposed in large meat grinders, violence, drugs, FBI hostile takeovers, quirky, eccentric characters- everything you expect in a crime show and everything that surpasses these expectations blended with some dark comedy and yet with a totally unanticipated plot is what Fargo unravels. "],
      likes: 880,
      dislikes: 120,
      trailer: "https://www.youtube.com/embed/xZCiyw1ZfB0"
    },
    {
      name: 'Cops',
      img: 'https://m.media-amazon.com/images/I/51M90CF1QJL._SY445_.jpg',
      img2: 'https://www.welikela.com/wp-content/uploads/2020/06/cops-logo-spike.jpg',
      yearReleased: 1989,
      seasons: 33,
      summary: "Featuring police officers, constables and sheriff's deputies patrolling streets for car thieves, drug pushers, sex-trade workers, violent thugs and anyone else who dares step onto the wrong side of the law. No music, no scripted dialogue, no narration; just gritty videos of cops in action during patrols and other police activities.",
      reviews: ["PLEASE don’t stop producing and broadcasting Cops!! I’ve watched this show since it came on over 30 years ago. It is a great show and I hate to see it cancelled due to recent events in which this show was not involved!! It’s not one of the top rated shows for no reason. You have a huge following. I have no idea what I will watch with Cops and Live PD cancelled. This is SO UNFAIR to all of the people who have loved both shows for years!!! Don’t we have rights too?!?! Yes... some Cops are bad but so are some NFL players... drugs, murder, rape, etc... should we stop showing football games also?!?! Most LEO... law enforcement officers are doing a great job. Please do not let the bad ones screw all of us out of a show we have watched for 33 seasons!!! PLEASE bring it back!!!!"],
      likes: 840,
      dislikes: 160,
      trailer: "https://www.youtube.com/embed/8Wg5d8Pdc3U"
    },
    {
      name: 'Criminal Minds',
      img: 'https://flxt.tmsimg.com/assets/p185123_b_v13_ya.jpg',
      img2: 'https://wwwimage-us.pplusstatic.com/base/files/seo/og-criminal-minds.jpg',
      yearReleased: 2005,
      seasons: 15,
      summary: "An elite squad of FBI profilers analyzes the country's most-twisted criminal minds, anticipating the perpetrators' next moves before they can strike again. Each member of the 'mind hunter' team brings his or her expertise to pinpoint predators' motivations and identify emotional triggers to stop them. The core group includes an official profiler who is highly skilled at getting into the minds of criminals, a quirky genius, the former media liaison who manages to adeptly balance family life and the job, and a computer wizard.",
      reviews: ["My wife and I love this show it's one of our favorites and we have watched every episode and the repeats quite a few times as well! It's to bad there will only be 10 more episodes of season 15 in August or September after a shortened season 14 having only 15 episodes. It did take a bit to get used to watching the show after Hotch left but am happy most of the original cast is still part of Criminal Minds and who knows maybe the ratings will sky rocket up high enough for more episodes to be ordered? 🤞 If not we would like to give a huge thank you to all of the characters past and present for their excellent acting and many years of great entertainment and thanks for the wonderful work to everyone who is involved behind the scenes as well, we will miss Criminal Minds"],
      likes: 940,
      dislikes: 60,
      trailer: "https://www.youtube.com/embed/NTYxiJBbEZk"
    }
  ]

Show.create(newShows, (err, shows) => {
  console.log(shows);
})
