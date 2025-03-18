import { Game } from "../model/Game.js";
import { gamesData } from "./AllGamesData.js";
import { getListOfTags, randomPrice, getDeveloper, getDate, getESRB, getRandomList } from "./helpers.js";

function getAllGamesData(random) {
    const allGamesData = gamesData.map(it => {
        return new Game(
            it.id,
            it.name,
            it.description,
            { url: it.mainImage },
            it.multimedia.map(image => ({ url: image })),
            getListOfTags(it.tags),
            randomPrice(random),
            it.requirements,
            [],
            getDeveloper(it.developer),
            getDate(it.released),
            [],
            getESRB(it.esrb),
            it.website
        );
    });

    return allGamesData.map(game => {
        const relatedGames = getRandomList(random, allGamesData, 10).filter(
            relatedGame => relatedGame !== game
        );
        
        game.relatedGames = relatedGames;
        return game;
    });
}

export default getAllGamesData;