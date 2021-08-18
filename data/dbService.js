import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

const ingredientTableName = 'Ingredients';
const effectTableName = 'Effects';

export const getDBConnection = async () => {
  return openDatabase({name: 'alchemyDatabase.db', createFromLocation: '~alchemyDatabase.db'});
};

export const getAllIngredients = async (db) => {
  const ingredients = [];
  const dbResults = await db.executeSql(`SELECT * FROM ${ingredientTableName}`);
  dbResults.forEach(result => {
    for (let index = 0; index < result.rows.length; index++) {
      ingredients.push(result.rows.item(index))
    }
  });
  return ingredients;
}

export const getAllEffects = async (db) => {
  //SELECT * FROM Effects
}

export const getIngredientById = async (db, id) => {
  //SELECT * FROM Ingredients WHERE IngredientId = 14
}

export const getIngredientsWithEffect = async (db, effectName) => {
  //SELECT * FROM Ingredients WHERE EffectOne = 'Restore Stamina' OR EffectTwo = 'Restore Stamina' OR EffectThree = 'Restore Stamina' OR EffectFour = 'Restore Stamina' ORDER BY IngredientName
}

//SELECT * FROM Ingredients WHERE IngredientName = 'Bleeding Crown'