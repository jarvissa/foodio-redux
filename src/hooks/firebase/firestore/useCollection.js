import { useState } from "react";
import db from "../../../firebase/firestore";

export const useCollection = (collection) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const add = async (payload) => {
    setLoading(true);

    try {
      const res = await db.collection(collection).add(payload);
      setData(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, add };
};
