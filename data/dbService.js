import {openDatabase, enablePromise} from 'react-native-sqlite-storage';
import * as dbNames from '../constants/dbNames';
enablePromise(true);

/**
 * Function to extract the db entries from the dbResults and optionally apply a conversion function to the items as they are extracted.
 * If no conversionFunction is provided the raw results from the db will be returned.
 * 
 * @param {*} dbResults - results object from an executeSql command
 * @param {*} conversionFunction - optional conversion function to be applied to the results from the database. 
 * @returns array of results from the db, converted using the conversionFunction if it is specified
 */
const extractResultsFromDbResult = (dbResults, conversionFunction) => {
  const results = [];
  dbResults.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      const convertedItem = conversionFunction 
        ? conversionFunction(result.rows.item(index))
        : result.rows.item(index);

      results.push(convertedItem)
    }
  });
  return results;
}

/**
 * Maps an ingredient entry from the dbNames.ingredientTableName table to a standard format for the app to use
 * @param {*} ingredient - row from dbNames.ingredientTableName table to convert
 */
const mapIngredient = (ingredient) => {
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

/**
 * Maps an ingredient entry from the dbNames.effectTableName table to a standard format for the app to use
 * @param {*} effect - row from dbNames.effectTableName table to convert
 */
const mapEffect = (effect) => {
  return {
    id: effect[dbNames.effectId],
    name: effect[dbNames.effectName]
  };
}

/**
 * Get a connection to the db
 */
export const getDBConnection = async () => {
  return openDatabase({name: 'alchemyDatabase.db', createFromLocation: '~alchemyDatabase.db'});
};

/** Ingredients */
/**
 * returns all ingredients from the dbNames.ingredientTableName, converted using the mapIngredient function from the db connection provided
 * @param {*} db - database connection to execute the query on
 * @returns array of ingredients ordered by name
 */
export const getAllIngredients = async (db) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${dbNames.ingredientTableName} ORDER BY ${dbNames.ingredientName}`);
  return extractResultsFromDbResult(dbResults, mapIngredient);
}

/**
 * returns a single ingredient from the dbNames.ingredientTableName, converted using the mapIngredient function from the db connection provided
 * which has the provided id
 * @param {*} db - database connection to execute the query on
 * @param {number} id - id of the ingredient to return
 * @throws - of no single entry matches the passed id
 * @returns - single ingredient object
 */
export const getIngredientById = async (db, id) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${dbNames.ingredientTableName} WHERE ${dbNames.ingredientId} = ${id}`);
  const results = extractResultsFromDbResult(dbResults, mapIngredient);
  
  if (results.length !== 1) {
    throw `Unable to find ingredient with id ${id}`;
  }
  
  return results[0]
}

/**
 * returns all ingredients from the dbNames.ingredientTableName which have the specified effect, converted using the mapIngredient function from the db connection provided
 * @param {*} db 
 * @param {string} effectName - name of the effect to find ingredients with
 * @returns array of ingredients ordered by name
 */
export const getIngredientsWithEffect = async (db, effectName) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${dbNames.ingredientTableName} WHERE 
  ${dbNames.ingredientEffectOne} = '${effectName}' OR 
  ${dbNames.ingredientEffectTwo} = '${effectName}' OR 
  ${dbNames.ingredientEffectThree} = '${effectName}' OR 
  ${dbNames.ingredientEffectFour} = '${effectName}' 
  ORDER BY ${dbNames.ingredientName}`);
  return extractResultsFromDbResult(dbResults, mapIngredient);
}

/** Effects */
/**
 * returns all effects from the dbNames.effectTableName, converted using the mapEffect function from the db connection provided
 * @param {*} db - database connection to execute the query on
 * @returns array of effects ordered by name
 */
export const getAllEffects = async (db) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${dbNames.effectTableName} ORDER BY ${dbNames.effectName}`);
  return extractResultsFromDbResult(dbResults, mapEffect);
}
