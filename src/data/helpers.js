import { ESRB } from '../model/Game.js';
import allDevelopers from './AllDevelopers.js';
import allTags from './AllTags.js';

function getDeveloper(name) {
  const developer = allDevelopers.find(dev => dev.name === name);
  if (!developer) {
    throw new Error("T_T");
  }
  return developer;
}

function getListOfTags(names) {
  return names.map(name => {
    const tag = allTags.find(t => t.name === name);
    if (!tag) {
      throw new Error("T_T");
    }
    return tag;
  });
}

function getESRB(name) {
  switch(name) {
    case "Mature": return ESRB.MATURE_17_PLUS;
    case "Everyone 10+": return ESRB.EVERYONE_10_PLUS;
    case "Teen": return ESRB.TEEN;
    case "Adults Only": return ESRB.ADULTS_ONLY;
    case "Everyone": return ESRB.EVERYONE;
    case "everyone": return ESRB.EVERYONE;
    case "Rating Pending": return ESRB.RATING_PENDING;
    default: return ESRB.RATING_PENDING;
  }
}

function getRandom(random, from, to) {
  return random * (to - from) + from;
}

function randomPrice(random) {
  return { currency: "USD", amount: getRandom(random, 0.0, 200.0) };
}

function getDate(date) {
  return new Date(date);
}

function getRandomList(random, list, amountOfElements) {
  const indices = new Set();
  for (let i = 0; i < amountOfElements && indices.size < list.length; i++) {
    indices.add(Math.floor(random * list.length));
  }
  return Array.from(indices).map(i => list[i]);
}

function getRandomBoolean(random) {
  return random < 0.5;
}

export {
  getDeveloper,
  getListOfTags,
  getESRB,
  getRandom,
  randomPrice,
  getDate,
  getRandomList,
  getRandomBoolean
};