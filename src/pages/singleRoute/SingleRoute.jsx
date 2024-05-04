import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "../singleRoute/SingleRoute.css";
import axios from "../../api";

const SingleRoute = () => {
  let [data, setData] = useState(null);

  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setData(res?.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single_route">
      <div className="container">
        <h2>SingleRoute</h2>
        <div className="product">
          <button>Add to Cart</button>
          <img src={data?.image} alt={data?.title} />
          <p>{data?.category}</p>
          <h4>{data?.title}</h4>
        </div>
        <div className="desc_contents">
          <div className="desc_title">
            <h4>Description</h4>
            <h4>Additional info</h4>
            <h4>Vendor</h4>
            <h4>Reviews (3)</h4>
          </div>
          <p>
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously
            this apart.
          </p>
          <p>
            Spluttered narrowly yikes left moth in yikes bowed this that grizzly
            much hello on spoon-fed that alas rethought much decently richly and
            wow against the frequent fluidly at formidable acceptably flapped
            besides and much circa far over the bucolically hey precarious
            goldfinch mastodon goodness gnashed a jellyfish and one however
            because.
          </p>
          <div className="desc_product">
            <ul>
              <li>
                <p>Type Of Packing</p> <p>Bottle</p>
              </li>
              <li>
                <p>Color</p> <p>Green, Pink, Powder Blue, Purple</p>
              </li>
              <li>
                <p>Quantity Per Case</p> <p>100ml</p>
              </li>
              <li>
                <p>Ethyl Alcohol</p> <p>70%</p>
              </li>
              <li>
                <p>Piece In One</p> <p>Cartoon</p>
              </li>
            </ul>
          </div>
          <div className="hr_line"></div>
          <p>
            Laconic overheard dear woodchuck wow this outrageously taut beaver
            hey hello far meadowlark imitatively egregiously hugged that yikes
            minimally unanimous pouted flirtatiously as beaver beheld above
            forward energetic across this jeepers beneficently cockily less a
            the raucously that magic upheld far so the this where crud then
            below after jeez enchanting drunkenly more much wow callously
            irrespective limpet.
          </p>
          <h3>Packaging & Delivery</h3>
          <div className="hr_line"></div>
          <p>
            Less lion goodness that euphemistically robin expeditiously bluebird
            smugly scratched far while thus cackled sheepishly rigid after due
            one assenting regarding censorious while occasional or this more
            crane went more as this less much amid overhung anathematic because
            much held one exuberantly sheep goodness so where rat wry well
            concomitantly.
          </p>
          <p>
            Scallop or far crud plain remarkably far by thus far iguana lewd
            precociously and and less rattlesnake contrary caustic wow this near
            alas and next and pled the yikes articulate about as less cackled
            dalmatian in much less well jeering for the thanks blindly
            sentimental whimpered less across objectively fanciful grimaced
            wildly some wow and rose jeepers outgrew lugubrious luridly
            irrationally attractively dachshund.
          </p>
          <h3>Suggested Use</h3>
          <p>Refrigeration not necessary.</p>
          <p>Stir before serving</p>
          <h3>Other Ingredients</h3>
          <p>Organic raw pecans, organic raw cashews.</p>
          <p>
            This butter was produced using a LTG (Low Temperature Grinding)
            process
          </p>
          <p>
            Made in machinery that processes tree nuts but does not process
            peanuts, gluten, dairy or soy
          </p>
          <h3>Warnings</h3>
          <p>Oil separation occurs naturally. May contain pieces of shell.</p>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
