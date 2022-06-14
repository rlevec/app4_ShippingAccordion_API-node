import express from "express";

const router = express.Router();

const users = [
{
    id: 1,
    title: 'I have placed my order, now what?',
    info:
      "After you place an order, you will instantly receive an email confirmation with your invoice. Once your order ships, we will email you a shipping confirmation with tracking information. Once your order arrives at your local freight terminal, they will then call you to make a delivery appointment. They will usually give you a two hour time window on the day of your choice. The delivery company will never show up without an appointment, they will always set an appointment with you first.",
  },
  {
    id: 2,
    title: 'What is my shipping timeframe?',
    info:
      "Your shipping time frame is dependent upon the product you have ordered. If it is in stock at our warehouse, we can ship it out within 2-3 business days. If it is not an item we have in stock, we will notify you ASAP and let you know the shipping time frame. Once an item is shipped, our freight companies can have it to the Dubrovnik in about 2 business days, Berlin in about 4 business days and the Asian Region in about 5-7 days. We will always send you a tracking number so that you can follow your order in real time.",
  },
  {
    id: 3,
    title: 'What if my order is damaged in shipping?',
    info:
      "Before you sign for your order, please inspect your shipment carefully. If you notice damage to the box or contents you should refuse the items and the designated freight company will send the products back to us. Also, if you notice any kind of damage to the box, or missing/short items please ask the driver to note it on the freight bill. Remember, once you sign for your order, Title of Goods passes to you, the purchaser. Once you sign for your order, even if the product inside the box seems ok, it is still better to report any damage.",
  },
  {
    id: 4,
    title: 'Damaged or defective goods?',
    info:
      "In the event that you receive your order and it is considered defective/damaged freight and you would like a refund, contact our customer service department and we will work together to issue you a refund. To qualify for the refund of your order, do not accept your order, and refuse the damaged goods and the shipper will send the damaged goods back to us. At Home Fitness will resolve this with the freight company. We will then re-ship your order to you with no additional charges. It is very likely that we can just simply mail you a new part to resolve the problem. We will work together with you to find an acceptable resolution.",
  },
  {
    id: 5,
    title: 'What is my return policy?',
    info:
      "To qualify for a refund, products purchased from the Online store must be returned in their original condition and packaging including all accessories, owner’s manuals, and unregistered blank warranty cards. All shipping fees and return shipping fees, including delivery/installation fees are non refundable unless approved by our customer service. All fees associated with returned products will be deducted from the original invoice amount.",
  },
]

router.get('/', (req, res) => {
    res.send(users);
});

export default router
