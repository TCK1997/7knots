# 7knots

*7knots* is a seafaring merchant game set in the 1600s with a rich historical context, detailed and immersive resource management, and realistic amounts of risk and uncertainty, developed using Phasor 3 & HTML5 for Hack&Roll 2020 ([Devpost](https://devpost.com/software/7knots-f8k4d9)).

![Port of Lisbon](https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/912/354/datas/gallery.jpg)


## Inspiration

Over the winter holidays, Rohan read _A Splendid Exchange_, a non-fiction book focusing on the history of long distance trade. So vivid and expansive was the trading economy of the 16th to 19th centuries that it was a wellspring of inspiration for multiple possible projects. Combined with our shared love for strategy and resource management games, as well as a desire to pick up new frameworks, we have decided to stick to a resource management game set in the 17th century, where you play as a initially relatively poor merchant with the goal of firstly, surviving, and secondly, achieving a huge net profit on the journey from and back to Lisbon.

## What it does

7knots is a game where the player plays as Henrique, the 24 year old son of a well-to-do merchant in Lisbon. Wanting to make a name for himself, and forced by his father to do so, Henrique decided to steer a merchantman of his own to the various ports of the East Atlantic and Indian Oceans, starting off with a small crew of 4 people in Lisbon. 

Between each port, the player will encounter random events, such as a storm, or a raid by pirates, each of which have their own unique consequences. Morale slowly drops at sea, and the player needs to have enough foresight to avoid a mutiny.

At the ports, the player can view the resources being traded in the Marketplace and trade the necessary resources. Each of the resources have a specific demand in each port based on historical and geographical reasons, and the state of the global economy provides even more variation with regards to prices. 

Since the merchantman requires a minimum crew size of 4 (including Henrique), the high mortality rate forces the player to hire new people to be on board the ship. The player can hire such people from the Tavern, where they can see the interested people along with their attributes and cost of hire. The names are drawn from a list of names particular to the culture, and the attributes (Charisma, Motivation, Navigation) affect different components of the game. Charisma allows the player to get better deals at the Marketplace, Motivation lowers the threshold for the occurance of a mutiny (allowing you to sail to further places), and Navigation results in faster voyages.

The game ends when the player visits all the ports and returns back to Lisbon, and a high score is tabulated based on the amount of Gold they have and the number of days that have elapsed. With so many options of risk and resource management, 7knots is a game that remains fresh and unique with each playthrough.

## How we built it

Since 7knots is an HTML5 game, we decided to use a relevant framework for the project. Namely, we decided to use Phasor 3. The files are organized with a clear separation of the UI portions of the game and the data portions of the game, with the game logic coded into the former. The latter is divided into different pages for static data (e.g. city attributes, cultural names etc.) and dynamic data (i.e. game state). A large array of functions are provided in this pseudo-backend to help the UI and game logic programmers.

## Challenges we ran into

The greatest challenge was definitely the constraints provided by the framework itself. Phaser 3 has a lot of features, but some features that we needed were not present. For one, it was difficult to include text entry boxes, as the suggestion many provided was to build one from scratch. Considering we have 14 resources, and 2 columns (sell and buy) for a Marketplace, it would be a difficult task to do within 24 hours. Hence, we decided to circumvent this by using input via browser alerts.

Another problem would be that we were very ambitious in our design. Even though we classified different milestones into v1.0, v1.1 etc., we found ourselves to still be too ambitious, and we were forced to shift features forward in order to work on what is truly needed. 

## Accomplishments that we're proud of

Needless to say, all of us are proud of learning how to make an HTML5 game. Additionally, we were happy that we were able to pick up a new framework in such a short period of time. But perhaps most of all, we are glad that the design of our product was, although ambitious, inspired and well thought out. There was a definite passion in all of us, and the time passed a lot more quickly than we thought it would.

## What we learned

On a technical level, we got an even better understanding of the more subtle nuances of JavaScript, and we also learnt how to code an HTML5 game using the framework Phasor 3. Additionally, we also learnt how to design a medium-scale game, which is something that none of us have done before.

We also learnt how important passion and genuine interest is in both the design and execution of the product. The progress we had made over the past 24 hours would not have been possible without it.

## What's next for 7knots

Insurance policies and shares! We were also thinking of a greater variety of cities, new starting cities, sea combat for pirate encounters, and more historically inspired scenarios. The trading odysseys of the Dutch and then British East India Companies are interesting (and also brutal), and it would be great to develop 7knots further and add more resources, including controversial ones that bring their own sets of costs and benefits (such as machinery and slaves).
