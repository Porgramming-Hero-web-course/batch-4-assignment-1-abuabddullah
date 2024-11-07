/* 
dfsdfDefine an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
*/
{
  interface IPersonType {
    name: string;
    age: number;
    email: string;
  }

  const person: IPersonType = {
    name: "Asif",
    age: 20,
    email: "asif@test.com",
  };

  const updateProfile = (
    objct: IPersonType,
    upInfObj: Partial<IPersonType>
  ): IPersonType => {
    return { ...objct, ...upInfObj };
  };
  console.log(
    "🚀 ~ updateProfile:",
    updateProfile(person, { name: "Asif A Owadud" })
  );
}
