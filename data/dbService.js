import {openDatabase, enablePromise} from 'react-native-sqlite-storage';
import * as dbNames from '../constants/dbNames';
enablePromise(true);

const extractResultsFromDbResult = (dbResults, conversionFunction) => {
  const results = [];
  dbResults.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      const convertedItem = conversionFunction(result.rows.item(index))
      results.push(convertedItem)
    }
  });
  return results;
}

const mapIngredients = (ingredient) => {
  return {
    id: ingredient[dbNames.ingredientId],
    name: ingredient[dbNames.ingredientName],
    effects: [
      ingredient[dbNames.ingredientEffectOne],
      ingredient[dbNames.ingredientEffectTwo],
      ingredient[dbNames.ingredientEffectThree],
      ingredient[dbNames.ingredientEffectFour]
    ]
  };
}

const mapEffects = (effect) => {
  return {
    id: effect[dbNames.effectId],
    name: effect[dbNames.effectName]
  };
}

export const getDBConnection = async () => {
  return openDatabase({name: 'alchemyDatabase.db', createFromLocation: '~alchemyDatabase.db'});
};

/** Ingredients */
export const getAllIngredients = async (db) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${dbNames.ingredientTableName} ORDER BY ${dbNames.ingredientName}`);
  return extractResultsFromDbResult(dbResults, mapIngredients);
}

export const getIngredientById = async (db, id) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${dbNames.ingredientTableName} WHERE ${dbNames.ingredientId} = ${id}`);
  const results = extractResultsFromDbResult(dbResults, mapIngredients);
  
  if (results.length !== 1) {
    throw `Unable to find ingredient with id ${id}`;
  }
  
  return results[0]
}

export const getIngredientsWithEffect = async (db, effectName) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${dbNames.ingredientTableName} WHERE 
  ${dbNames.ingredientEffectOne} = '${effectName}' OR 
  ${dbNames.ingredientEffectTwo} = '${effectName}' OR 
  ${dbNames.ingredientEffectThree} = '${effectName}' OR 
  ${dbNames.ingredientEffectFour} = '${effectName}' 
  ORDER BY ${dbNames.ingredientName}`);
  return extractResultsFromDbResult(dbResults, mapIngredients);
}

/** Effects */
export const getAllEffects = async (db) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${dbNames.effectTableName} ORDER BY ${dbNames.effectName}`);
  return extractResultsFromDbResult(dbResults, mapEffects);
}

//SELECT * FROM Ingredients WHERE IngredientName like '%Bleeding Crown%'
//^ same for effect