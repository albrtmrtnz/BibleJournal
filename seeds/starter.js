const { v4: uuid } = require('uuid');

let scriptures = [
    {
        id: uuid(),
        scripture: 'Psalm 23:1 "Jehovah is my Shepard. I will lack nothing."'
    },
    {
        id: uuid(),
        scripture: '1 John 4:8 "Whoever does not love has not come to know God, because God is love."'
    },
    {
        id: uuid(),
        scripture: 'Proverbs 27:11 "Be wise, my son, and make my heart rejoice, So that I can make a reply to him who taunts me."'
    },
    {
        id: uuid(),
        scripture: 'Genesis 1:1 "In the beginning God created the heavens and the earth."'
    },
    {
        id: uuid(),
        scripture: 'Hebrews 13:1 "Let your brotherly love continue."'
    }
]

module.exports = scriptures;