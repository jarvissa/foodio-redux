import { useEffect, useState } from "react";
import db from "../../../firebase/firestore";

export const useCollection = (collection) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db.collection(collection).onSnapshot(
      (snapshot) => {
        const res = [];

        snapshot.docs.forEach((doc) => {
          res.push({ id: doc.id, ...doc.data() });
        });

        setData(res);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [collection]);

  return { data, error, loading };
};
