import React, { useState } from "react";
import SearchInput from "../components/SearchInput/SearchInput";

import { search } from "../api/Client";
import { BreachDetails } from "../components/BreachDetails/BreachDetails";

const Home = () => {
  const [leaks, setLeaks] = useState([]);
  const handleSubmit = async (type, searchValue, recaptchaValue) => {
    const leakData = await search(type, searchValue, recaptchaValue);
    setLeaks(leakData?.data || []);
  };

  return (
    <>
      <SearchInput onSubmit={handleSubmit} />
      {leaks.map((leak) => (
        <BreachDetails key={leak?.details} data={leak} />
      ))}
    </>
  );
};

export default Home;
