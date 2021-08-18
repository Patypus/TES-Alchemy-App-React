import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

const ingredientTableName = 'Ingredients';
const effectTableName = 'Effects';

const mapResultsFromDb = (dbResults) => {
  const results = [];
  dbResults.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      results.push(result.rows.item(index))
    }
  });
  return results;
}
export const getDBConnection = async () => {
  return openDatabase({name: 'alchemyDatabase.db', createFromLocation: '~alchemyDatabase.db'});
};

export const getAllIngredients = async (db) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${ingredientTableName}`);
  return mapResultsFromDb(dbResults);
}

export const getAllEffects = async (db) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${effectTableName}`);
  return mapResultsFromDb(dbResults);
}

export const getIngredientById = async (db, id) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${ingredientTableName} WHERE IngredientId = ${id}`);
  const results = mapResultsFromDb(dbResults);
  
  if (results.length !== 1) {
    throw `Unable to find ingredient with id ${id}`;
  }

  return results[0]
}

export const getIngredientsWithEffect = async (db, effectName) => {
  const dbResults = await db.executeSql(`SELECT * FROM ${ingredientTableName} WHERE EffectOne = '${effectName}' OR EffectTwo = '${effectName}' OR EffectThree = '${effectName}' OR EffectFour = '${effectName}' ORDER BY IngredientName`);
  return mapResultsFromDb(dbResults);
}

//SELECT * FROM Ingredients WHERE IngredientName = 'Bleeding Crown'