/* 
Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
 */
{
  const getProperty = <O, P extends keyof O>(objct: O, prop: P): O[P] => {
    return objct[prop];
  };

  interface IBookType {
    title: string;
    category: string;
  }

  const bookObj: IBookType = {
    title: "English For Today",
    category: "Primary",
  };

  console.log(
    "🚀 ~ getProperty ~ getProperty:",
    getProperty<IBookType, keyof IBookType>(bookObj, "title")
  );
}
