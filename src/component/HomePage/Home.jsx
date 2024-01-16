import React from "react";
import rightImg from "../../assets/images/rastafarian-agriculture-fair.jpg";
import baner1 from "../../assets/images/alexander-andrews-EJ79f7Vew8A-unsplash.jpg";
import baner2 from "../../assets/images/johann-siemens-EPy0gBJzzZU-unsplash.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-1">
        <h5>ARTICLE</h5>
        <h1>The Art and Science of Agriculture</h1>
        <h3>
          Agriculture is the art and science of cultivating the soil, growing
          crops and raising livestock.
        </h3>
      </div>

      <div className="home_contenar">
        <div className="left_contenar">
          <h4>PHOTOGRAPH</h4>
          <h3>Rastafarian Agriculture Fair</h3>
          <p>
            Tropical fruits and vegetables are cultivated by farmers in the
            Caribbean. Melons, cucumbers, and squash are just some of the
            produce offered at the Rastafarian Agriculture Fair in St. Thomas,
            Virgin Islands. Over centuries, the growth of agriculture supported
            the development of cities. Before agriculture became widespread,
            hunting and gathering was how people fed themselves. Between 10,000
            and 12,000 years ago, people gradually learned how to grow cereal
            and root crops, and settled down to a life based on farming.
          </p>
        </div>
        <div className="right_contenar">
          <img src={rightImg} alt="" />
        </div>
      </div>
      <div id="paragraph">
        <h2>ARTICLE</h2>
        <p>
          Agriculture is the art and science of cultivating the soil, growing
          crops, and raising livestock. It includes the preparation of plant and
          animal products for people to use and their distribution to markets.
        </p>
        <p>
          Agriculture provides most of the world’s food and fabrics. Cotton,
          wool, and leather are all agricultural products. Agriculture also
          provides wood for construction and paper products.
        </p>
        <br />
        <p>
          These products, as well as the agricultural methods used, may vary
          from one part of the world to another.
        </p>
        <h2>Start of Agriculture</h2>
        <p>
          Over centuries, the growth of agriculture supported the development of
          cities. Before agriculture became widespread, hunting and gathering
          was how people fed themselves. Between 10,000 and 12,000 years ago,
          people gradually learned how to grow cereal and root crops, and
          settled down to a life based on farming.
        </p>
        <p>
          Eventually, much of Earth’s population became dependent on
          agriculture. Scholars are not sure why this shift to farming took
          place, but it may have occurred because of climate change.
        </p>
        <p>
          When people began growing crops, they also continued to adapt animals
          and plants for human use. Adapting wild plants and animals for people
          to use is called domestication. Hunter-gatherers began to domesticate
          animals and change the natural environment to grow more food even
          before settled farming became widespread.
        </p>
        <p>
          Barley, wheat, legumes, vetch, and flax were among the first plants to
          be domesticated.
        </p>
        <p>
          The first domesticated animals were dogs, which were used for hunting.
          Sheep and goats were probably domesticated next. People also
          domesticated cattle and pigs. The predecessors of most of these
          animals had once been hunted for hides and meat. Many of them also
          became sources of milk, cheese, and butter. Eventually, people used
          domesticated animals such as oxen for plowing, pulling, and
          transportation.
        </p>
        <p>
          Agriculture enabled people to produce surplus food. They could use
          this extra food when crops failed or trade it for other goods.
          Agriculture kept formerly nomadic people near their fields and led to
          the development of permanent villages. These became linked through
          trade. New economies were so successful in some areas that cities
          developed. The earliest societies based on intensive agriculture arose
          in the Fertile Crescent (which spans the Levant, modern-day Turkey,
          and Iran) and along the Nile River in Egypt. Other very early
          agricultural societies developed independently in Central America,
          East Asia, the Indus Valley, and West Africa.
        </p>
        <h2>Improved Technology</h2>
        <p>
          Many effective agricultural techniques have roots in pre-agricultural
          human history. For millennia, people have used controlled burning
          techniques to get rid of brush and debris, allowing edible plants to
          grow more abundantly and preventing larger wildfires during dry
          seasons. Today, large wildfires in North America and Australia
          demonstrate the importance of maintaining controlled burning practices
          perfected by many Native American tribes and Aboriginal Australian
          peoples.
        </p>
        <p>
          Farming has also improved over the years. Early farmers cultivated
          small plots of land by hand, using axes to clear away trees and
          digging sticks to break up and till the soil. Over time, improved
          farming tools of bone, stone, bronze, and iron were developed. New
          methods of storage evolved. People began stockpiling foods in jars and
          clay-lined pits for use in times of scarcity. They also began making
          clay pots and other vessels for carrying and cooking food.
        </p>
        <p>
          Early farmers also developed improved varieties of plants. For
          example, around 6000 B.C.E., a new variety of wheat arose in South
          Asia and Egypt. It was stronger than previous cereal grains, its hulls
          were easier to remove, and it could be made into bread.
        </p>

        <h2>Machinery</h2>
        <p>
          A period of important agricultural development began in the early
          1700s for Great Britain and the Low Countries (Belgium, Luxembourg,
          and the Netherlands, which lie below sea level). New agricultural
          inventions dramatically increased food production in Europe and
          European colonies, particularly in North America.
        </p>
        <p>
          Many machines were developed in the United States. The cotton gin,
          invented by Eli Whitney in 1794, reduced the time needed to separate
          cotton fiber from seed. The invention of the cotton gin was not
          without negative consequences, however: as cotton became more
          profitable and less labor-intensive, enslavers had incentive to buy
          more enslaved people to produce more cotton.
        </p>
      </div>
      <div className="bannerImg">
        <img src={baner2} alt="" />
        <img src={baner1} alt="" />
      </div>
    </div>
  );
};

export default Home;
