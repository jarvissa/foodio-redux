import Card from "../../ui/Card";
import Meal from "./Meal";
import Wrapper from "../../ui/Wrapper";
import { useCollection } from "../../../hooks/firebase/firestore/useCollection";
import Loading from "../../ui/Loading";

function Meals() {
  const {
    data: meals,
    error: mealsError,
    loading: mealsLoading,
  } = useCollection("meals");

  return (
    <Wrapper className="p-5">
      {mealsLoading && <Loading></Loading>}
      {mealsError && (
        <p className="text-center text-red-500 font-bold">
          Fetching meals failed!
        </p>
      )}
      {meals && (
        <Card className="max-w-3xl mx-auto px-7 py-8 bg-white">
          {meals.map((meal) => (
            <Meal meal={meal} key={meal.id}></Meal>
          ))}
        </Card>
      )}
    </Wrapper>
  );
}

export default Meals;
