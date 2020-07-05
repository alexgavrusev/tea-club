import React, { useState } from "react";
import dialogContext from "context/dialog";

import Layout from "components/layout";
import Dialog from "components/dialog";

import Hero from "sections/hero";
import Ceremonies from "sections/ceremonies";
import Order from "sections/order";
import WhyUs from "sections/why-us";
import Contact from "sections/contact";

const Index = () => {
  const dialog = useState({
    formHeading: null,
    ceremony: null,
    open: false,
    validSubmitted: false,
  });

  return (
    <Layout title="Чайные церемонии в Зеленограде и Москве">
      <dialogContext.Provider value={dialog}>
        <Hero />
        <Ceremonies />
        <Order />
        <WhyUs />
        <Contact />
        <Dialog />
      </dialogContext.Provider>
    </Layout>
  );
};
export default Index;
