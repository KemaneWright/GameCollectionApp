create table if not exists games (
  id serial primary key NOT NULL,
  img varchar(50) NOT NULL,
  title text NOT NULL,
  genre text NOT NULL,
  dateReleased text NOT NULL,
  summary text NOT NULL
);
create table if not exists users (
  user_id serial primary key NOT NULL,
  name text,
  email text unique
);


-- insert into games(img, title, genre, dateReleased, summary)
--   values
--   ('./images/vanillaWoW.jpg', 'World of Warcraft', 'MMO-RPG', '2004', 'World of Warcraft takes place in a 3D representation of the Warcraft universe that players can interact with through their characters. The game world initially consisted of the two continents in Azeroth: Kalimdor and the Eastern Kingdoms. Four separate expansions later added to the game''s playable area the realms of Outland and Draenor and the continents of Northrend and Pandaria. As a player explores new locations, different routes and means of transportation become available. Players can access "flight masters" in newly discovered locations to fly to previously discovered locations in other parts of the world. Players can also use boats, zeppelins, or portals to move from one continent to another. Although the game world remains relatively similar from day to day, seasonal events reflecting real world events, such as Halloween, Christmas, Children''s Week, Easter, and Midsummer have been represented in the game world. Locations also have variable weather including, among other things, rain, snow, and dust storms.'),
--   ('./images/bcWoW.jpg', 'The Burning Crusade', 'MMO-RPG', '2006', 'Two new playable races were added to World of Warcraft in The Burning Crusade: the Draenei of the Alliance and the Blood Elves of the Horde. Previously, the shaman class was exclusive to the Horde faction (available to the orc, troll and tauren races), and the paladin class was exclusive to the Alliance faction (available to the human and dwarf races); with the new races, the expansion allowed players to be a Draenei shaman (Alliance), and a Blood Elf paladin (Horde). The level cap was raised by ten, making it 70 (up from 60, established in the original World of Warcraft) in addition to that; a whole new planet, Outland, was released, with associated quests, dungeons, raids, zones, creatures, and cities.'),
--   ('./images/wotlkWoW.jpg', 'Wrath of the Lich King', 'MMO-RPG', '2008', 'The Alliance and Horde eventually led a combined offensive on the Wrathgate, the entrance to the Lich King''s fortress of Icecrown Citadel. Before they could succeed however, Grand Apothecary Putress and his Royal Apothecary Society followers (renegade Forsaken) unleashed a new plague that killed friend and foe alike, while his traitorous counterpart, the dreadlord Varimathras, seized the Undercity in a coup that nearly killed Sylvanas. The usurpers were slain for their vile deeds by armies of the Alliance and Horde and the Forsaken capital was restored. The debacle however, created suspicion among the Horde regarding Sylvanas’ loyalties. At the Wrathgate, many brave Alliance soldiers died at the hands of the Forsaken''s Royal Apothecary Society; including King Varian''s dear friend Bolvar Fordragon. Varian, who had always been wary of the orcs, discovered that the Royal Apothecary Society had been developing the new plague for years. The events that transpired during the battle for the Undercity convinced the human king that the Horde had been left unchecked for too long and he becomes hostile to the Horde for the rest of the campaign in Northrend.'),
--   ('./images/cataWoW.jpg', 'Cataclysm', 'MMO-RPG', '2010', 'With the release of Cataclysm, the maximum player level has been raised from 80 to 85. The game''s two main continents, Kalimdor and Eastern Kingdoms have been redesigned with a changed appearance, including flooded areas and lava canals, and some new areas. The quest system has been refreshed with almost 3500 new quests along with new and streamlined low and mid-level quests to complement the redesigned areas of Azeroth. Ten new dungeons and five new raids have been added as well as a new secondary skill, Archaeology. The glyph system has been overhauled to now have three types of glyph: prime, major, minor. Furthermore, glyphs are now permanently learned and require a reagent to remove from a slot. Two new playable races have been added, the Worgen for the Alliance and Goblins for the Horde. In addition, existing classes have been expanded to be available to more races. The major cities of Orgrimmar and Stormwind experienced major changes. Lastly, the existing talent system has been overhauled. Players were awarded their first talent point at level 10, the next at 11, and then once per two levels until level 80. Player that reached levels 81 through 85 received a talent point at each level bringing the total to 41 talent points. Talent points allow the player to choose new and/or improved abilities.'),
--   ('./images/mopWoW.jpg', 'Mists of Pandaria', 'MMO-RPG', '2012', 'Mists of Pandaria raised the existing level cap from level 85 to 90. It introduced a new character class, the monk, along with a new playable race, the Pandaren. The vanity pet system was overhauled and a pet battle system was added. Scenarios were introduced, and Challenge Modes were added for dungeons. The existing talent trees were replaced by a new system of tiered talents awarded every 15 levels. The initial patch included nine new dungeons, three new raids, two new battlegrounds and one new arena. Subsequent patches introduced the Brawler''s Guild and heroic versions of the scenarios. Several additional raids, dungeons, a new battleground, and a new arena were also added.'),
--   ('./images/wodWoW.jpg', 'Warlords of Draenor', 'MMO-RPG', '2014', 'At the end of Mists of Pandaria, Garrosh Hellscream is overthrown as Warchief of the Horde by a combined Alliance–Horde force and taken into custody by the Pandaren so that he can stand trial for the atrocities he committed in Pandaria. However, before he can be judged, Garrosh escapes captivity with the aid of Kairoz (a renegade bronze dragon whom Garrosh soon betrays and kills), and travels to the orcish homeworld of Draenor in the past and interferes with history, creating an alternate timeline prior to the rise of the Horde. Garrosh changes history by preventing his father Grommash from drinking the blood of the demon lord Mannoroth, which led to the orc''s corruption by the Burning Legion and played a major role in the events of the first three Warcraft games. Instead, the clans unite into an "Iron Horde" using technology Garrosh brought from his reality, beginning a war of conquest on Draenor by killing Mannoroth, and leading to the building of a Dark Portal that would allow them to travel through time and lay siege to the Azeroth of the present era.'),
--   ('./images/legionWoW.jpg', 'Legion', 'MMO-RPG', '2016', 'The expansion allows players to level up to 110 in the Broken Isles, an increase from the cap of 100 in the previous expansion Warlords of Draenor. Initially, there were ten dungeons with patch 7.1 adding the revamped Karazhan dungeon and patch 7.2 will add the Sargeras-related dungeon Cathedral of the Eternal Night. There are four raid tiers planned for Legion, with the first tier being "The Emerald Nightmare" that opened three weeks after release along with the small raid "Trial of Valor" in patch 7.1, the second raid tier "The Nighthold" in patch 7.1.5, the third raid tier "Tomb of Sargeras" in patch 7.2 and the final raid tier takes place on Argus in patch 7.3. After Emerald Nightmare was opened, Mythic Plus dungeons and Legion''s first player versus player (PvP) season began. In patch 7.3, players will travel to Argus - the headquarters of the Burning Legion and the former home of the Draenei/Eredar that will be an outdoor questing zone.'),
--   ('./images/lol.jpeg', 'League of Legends', 'MOBA', '2009', 'In League of Legends, players assume the role of an unseen "summoner" that controls a "champion" with unique abilities and battle against a team of other players or computer-controlled champions. The goal is usually to destroy the opposing team''s "nexus", a structure which lies at the heart of a base protected by defensive structures, although other distinct game modes exist as well. Each League of Legends match is discrete, with all champions starting off fairly weak but increasing in strength by accumulating items and experience over the course of the game.[2] The champions and setting blend a variety of elements, including high fantasy, steampunk, folklore, and Lovecraftian horror.')