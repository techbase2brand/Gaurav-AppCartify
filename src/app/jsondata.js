import banne1 from "../../public/casestudy/intigrationbanner1.jpg";
import banne2 from "../../public/casestudy/intigrationbanner2.jpg";

export const casestudyData = [
  {
    id: 1,
    slug: "warley-food-service-driving",
    bannerImage:banne1,
    title: "Driving Customer Loyalty with the Warley Food Service Mobile App – A Shopify Integration Success Story",
    subtitle: "Warley Food Service, a fast-growing brand in the online food and grocery sector, operates its business on Shopify. While the desktop and mobile web experience attracted initial traffic, customer retention remained a challenge. They recognized that in a competitive landscape, building a loyal customer base required a mobile-first strategy that could offer convenience, personalization, and real-time interaction.",
    clientWants: {
      sectionTitle: "What the Client Wanted",
      items: [
        'A feature-rich mobile app to retain and re-engage customers',
        'Real-time Shopify integration for product updates and order tracking',
        'Direct communication through push notifications',
        'A smooth repeat purchase flow tailored to food service needs',
        'Cross-platform support on both iOS and Android devices'
      ]
    },
    challengesFaced: {
      sectionTitle: "Challenges Faced",
      items: [
        {
          title: "Low Engagement on Mobile",
          description: "Without a native app, customer interaction on mobile was limited, leading to drop-offs and reduced loyalty."
        },
        {
          title: "Disconnected Shopping Journey",
          description: "Customers often switched between web and mobile, lacking a unified and seamless experience across platforms."
        },
        {
          title: "Lack of Direct Notifications",
          description: "The absence of instant communication tools made it hard to update customers on order statuses or timely offers."
        },
        {
          title: "Poor Repeat Purchase Rates",
          description: "Reordering groceries or essentials wasn’t intuitive, resulting in fewer repeat transactions and missed upselling chances."
        },
        {
          title: "Technical Barriers in Integration",
          description: "Integrating Shopify data in real-time posed hurdles such as API limits, syncing delays, and personalization at scale."
        }
      ]
    },
    solutionImplemented: {
      sectionTitle: "Solution Implemented",
      items: [
        {
          title: "React Native App Development",
          description: "We built a high-performance mobile app using React Native, enabling Warley to maintain one codebase for iOS and Android, reducing time-to-market."
        },
        {
          title: "Shopify Storefront API Integration",
          description: "Real-time product listings, order history, and user data were synced seamlessly using Shopify’s APIs, creating a unified customer experience."
        },
        {
          title: "Push Notification Enablement",
          description: "Firebase Cloud Messaging allowed Warley to send instant updates—on order status, promotions, or abandoned carts—boosting re-engagement dramatically."
        },
        {
          title: "Streamlined Checkout Design",
          description: "Using Shopify’s secure webview, we simplified the checkout process with pre-filled details and multiple payment gateways, encouraging fast repeat purchases."
        },
        {
          title: "Performance Optimization Techniques",
          description: "To handle large inventory, features like lazy loading and image caching were added, resulting in smooth browsing with faster load times on all devices."
        }
      ]
    },
    resultsAchieved: {
      sectionTitle: "Results Achieved in Just 2 Months",
      items: [
        {
          title: "Mobile Engagement Jumped",
          description: "Time spent on the app increased as users found it easier to explore and buy food items on the go."
        },
        {
          title: "Repeat Orders Increased",
          description: "Wishlist and reordering tools drove customers to return and buy their favorites again with minimal effort."
        },
        {
          title: "Improved Customer Re-Engagement",
          description: "Push notifications ensured users were informed, reminded, and re-engaged regularly—boosting retention and conversions."
        },
        {
          title: "Accurate Real-Time Data Flow",
          description: "The Shopify-connected app kept inventory, orders, and customer accounts up-to-date without delays."
        },
        {
          title: "Fast & Smooth App Experience",
          description: "Even with an extensive product catalog, users experienced no lag thanks to backend enhancements and optimized image loading."
        }
      ],
      summary: "The mobile app created for Warley Food Service revolutionized its customer engagement strategy. With deeper Shopify integration, smarter UX flows, and a strong communication channel via push notifications, the brand saw measurable improvements in retention and re-engagement. Warley is now well-positioned to expand with loyalty features and app-exclusive promotions in the near future."
    },
  },
  {
    id: 2,
    slug: "warley-food-service-boosting",
     bannerImage:banne2,
    title: "Boosting Customer Retention with Warley Superstore Mobile App – A Shopify Integration Success Story",
    subtitle: "Warley Superstore, a thriving Shopify-based e-commerce brand, wanted to improve customer retention and deepen engagement in a competitive market. While its web store was performing well, the lack of a mobile-first experience limited its ability to stay connected with customers and encourage repeat purchases.",
    clientWants: {
      sectionTitle: "What the Client Wanted",
      items: [
        'A dedicated mobile app to enhance customer retention',
        'Seamless integration with Shopify for real-time product and order data',
        'A direct communication channel using push notifications',
        'Improved customer experience with simplified repeat purchases',
        'A consistent, cross-platform mobile experience on iOS and Android'
      ]
    },
    challengesFaced: {
      sectionTitle: "Challenges We Experienced",
      items: [
        {
          title: "Limited Web Engagement",
          description: "The Shopify web store lacked the always-on connectivity and personalization that a mobile app offers, leading to reduced customer engagement and lower retention rates over time."
        },
        {
          title: "Fragmented Customer Journey",
          description: "Customers interacted across multiple channels without a unified experience, making it difficult to maintain continuity and deliver personalized service throughout their shopping journey."
        },
        {
          title: "No Direct Communication Channel",
          description: "Without a mobile app, Warley couldn’t send real-time push notifications, limiting their ability to alert users about orders, offers, or abandoned carts promptly."
        },
        {
          title: "Low Repeat Purchase Rate",
          description: "The lack of a convenient reordering process on the web led to missed opportunities for encouraging repeat business and building long-term customer loyalty."
        },
        {
          title: "Data Integration Limitations",
          description: "Bridging Shopify’s backend with a mobile front-end posed technical challenges, especially with real-time syncing, API rate limits, and managing customer-specific data securely."
        }
      ]
    },
    solutionImplemented: {
      sectionTitle: "Solution We Implemented",
      items: [
        {
          title: "React Native App Development",
          description: "A cross-platform mobile app was developed using React Native, enabling a single codebase for both iOS and Android with native performance and faster development cycles."
        },
        {
          title: "Shopify Integration",
          description: "The app was integrated with Shopify using the Storefront SDK and APIs to fetch real-time product, cart, and customer data, ensuring a seamless and connected shopping experience."
        },
        {
          title: "Push Notification Setup",
          description: "Firebase Cloud Messaging was integrated to send real-time push notifications for order updates, cart reminders, and promotions, significantly improving re-engagement and communication with customers."
        },
        {
          title: "Optimized Checkout Flow",
          description: "The checkout experience was streamlined using Shopify’s secure webview, allowing pre-filled customer details, fewer steps, and multiple payment options for quicker repeat purchases."
        },
        {
          title: "Performance Enhancements",
          description: "To handle large catalogs, lazy loading, image caching, and pagination were implemented, improving app speed, reducing load times, and ensuring a smooth user experience across all devices."
        }
      ]
    },
    resultsAchieved: {
      sectionTitle: "Results Client Received in 2 Months",
      items: [
        {
          title: "Higher Engagement on Mobile",
          description: "User sessions increased with more time spent browsing products and interacting within the app."
        },
        {
          title: "Boost in Repeat Purchases",
          description: "Simplified checkout and wishlist features encouraged customers to return and reorder frequently."
        },
        {
          title: "Better Re-engagement Rates",
          description:"Personalized push notifications effectively brought users back, boosting conversions and reducing cart abandonment."
        },
        {
          title: "Seamless Data Sync",
          description: "Real-time integration with Shopify ensured accurate product, cart, and order data across all app functions."
        },
        {
          title: "Faster App Experience",
          description: "Performance optimizations delivered quicker load times, even with thousands of high-resolution product listings."
        }
      ],
      summary: "The Warley Superstore mobile app transformed how the brand interacts with its customers. With deep Shopify integration, performance optimization, and real-time engagement features, the app delivered significant growth in retention and repeat business. Warley now has a scalable mobile platform ready for future features like loyalty programs and exclusive in-app promotions."
    },
  },
  {
    id: 3,
    slug: "warley-food-service-driving",
     bannerImage:banne1,
    title: "Driving Customer Loyalty with the Warley Food Service Mobile App – A Shopify Integration Success Story",
    subtitle: "Warley Food Service, a fast-growing brand in the online food and grocery sector, operates its business on Shopify. While the desktop and mobile web experience attracted initial traffic, customer retention remained a challenge. They recognized that in a competitive landscape, building a loyal customer base required a mobile-first strategy that could offer convenience, personalization, and real-time interaction.",
    clientWants: {
      sectionTitle: "What the Client Wanted",
      items: [
        'A feature-rich mobile app to retain and re-engage customers',
        'Real-time Shopify integration for product updates and order tracking',
        'Direct communication through push notifications',
        'A smooth repeat purchase flow tailored to food service needs',
        'Cross-platform support on both iOS and Android devices'
      ]
    },
    challengesFaced: {
      sectionTitle: "Challenges Faced",
      items: [
        {
          title: "Low Engagement on Mobile",
          description: "Without a native app, customer interaction on mobile was limited, leading to drop-offs and reduced loyalty."
        },
        {
          title: "Disconnected Shopping Journey",
          description: "Customers often switched between web and mobile, lacking a unified and seamless experience across platforms."
        },
        {
          title: "Lack of Direct Notifications",
          description: "The absence of instant communication tools made it hard to update customers on order statuses or timely offers."
        },
        {
          title: "Poor Repeat Purchase Rates",
          description: "Reordering groceries or essentials wasn’t intuitive, resulting in fewer repeat transactions and missed upselling chances."
        },
        {
          title: "Technical Barriers in Integration",
          description: "Integrating Shopify data in real-time posed hurdles such as API limits, syncing delays, and personalization at scale."
        }
      ]
    },
    solutionImplemented: {
      sectionTitle: "Solution Implemented",
      items: [
        {
          title: "React Native App Development",
          description: "We built a high-performance mobile app using React Native, enabling Warley to maintain one codebase for iOS and Android, reducing time-to-market."
        },
        {
          title: "Shopify Storefront API Integration",
          description: "Real-time product listings, order history, and user data were synced seamlessly using Shopify’s APIs, creating a unified customer experience."
        },
        {
          title: "Push Notification Enablement",
          description: "Firebase Cloud Messaging allowed Warley to send instant updates—on order status, promotions, or abandoned carts—boosting re-engagement dramatically."
        },
        {
          title: "Streamlined Checkout Design",
          description: "Using Shopify’s secure webview, we simplified the checkout process with pre-filled details and multiple payment gateways, encouraging fast repeat purchases."
        },
        {
          title: "Performance Optimization Techniques",
          description: "To handle large inventory, features like lazy loading and image caching were added, resulting in smooth browsing with faster load times on all devices."
        }
      ]
    },
    resultsAchieved: {
      sectionTitle: "Results Achieved in Just 2 Months",
      items: [
        {
          title: "Mobile Engagement Jumped",
          description: "Time spent on the app increased as users found it easier to explore and buy food items on the go."
        },
        {
          title: "Repeat Orders Increased",
          description: "Wishlist and reordering tools drove customers to return and buy their favorites again with minimal effort."
        },
        {
          title: "Improved Customer Re-Engagement",
          description: "Push notifications ensured users were informed, reminded, and re-engaged regularly—boosting retention and conversions."
        },
        {
          title: "Accurate Real-Time Data Flow",
          description: "The Shopify-connected app kept inventory, orders, and customer accounts up-to-date without delays."
        },
        {
          title: "Fast & Smooth App Experience",
          description: "Even with an extensive product catalog, users experienced no lag thanks to backend enhancements and optimized image loading."
        }
      ],
      summary: "The mobile app created for Warley Food Service revolutionized its customer engagement strategy. With deeper Shopify integration, smarter UX flows, and a strong communication channel via push notifications, the brand saw measurable improvements in retention and re-engagement. Warley is now well-positioned to expand with loyalty features and app-exclusive promotions in the near future."
    },
  },
  {
    id: 4,
    slug: "warley-food-service-boosting",
     bannerImage:banne2,
    title: "Boosting Customer Retention with Warley Superstore Mobile App – A Shopify Integration Success Story",
    subtitle: "Warley Superstore, a thriving Shopify-based e-commerce brand, wanted to improve customer retention and deepen engagement in a competitive market. While its web store was performing well, the lack of a mobile-first experience limited its ability to stay connected with customers and encourage repeat purchases.",
    clientWants: {
      sectionTitle: "What the Client Wanted",
      items: [
        'A dedicated mobile app to enhance customer retention',
        'Seamless integration with Shopify for real-time product and order data',
        'A direct communication channel using push notifications',
        'Improved customer experience with simplified repeat purchases',
        'A consistent, cross-platform mobile experience on iOS and Android'
      ]
    },
    challengesFaced: {
      sectionTitle: "Challenges We Experienced",
      items: [
        {
          title: "Limited Web Engagement",
          description: "The Shopify web store lacked the always-on connectivity and personalization that a mobile app offers, leading to reduced customer engagement and lower retention rates over time."
        },
        {
          title: "Fragmented Customer Journey",
          description: "Customers interacted across multiple channels without a unified experience, making it difficult to maintain continuity and deliver personalized service throughout their shopping journey."
        },
        {
          title: "No Direct Communication Channel",
          description: "Without a mobile app, Warley couldn’t send real-time push notifications, limiting their ability to alert users about orders, offers, or abandoned carts promptly."
        },
        {
          title: "Low Repeat Purchase Rate",
          description: "The lack of a convenient reordering process on the web led to missed opportunities for encouraging repeat business and building long-term customer loyalty."
        },
        {
          title: "Data Integration Limitations",
          description: "Bridging Shopify’s backend with a mobile front-end posed technical challenges, especially with real-time syncing, API rate limits, and managing customer-specific data securely."
        }
      ]
    },
    solutionImplemented: {
      sectionTitle: "Solution We Implemented",
      items: [
        {
          title: "React Native App Development",
          description: "A cross-platform mobile app was developed using React Native, enabling a single codebase for both iOS and Android with native performance and faster development cycles."
        },
        {
          title: "Shopify Integration",
          description: "The app was integrated with Shopify using the Storefront SDK and APIs to fetch real-time product, cart, and customer data, ensuring a seamless and connected shopping experience."
        },
        {
          title: "Push Notification Setup",
          description: "Firebase Cloud Messaging was integrated to send real-time push notifications for order updates, cart reminders, and promotions, significantly improving re-engagement and communication with customers."
        },
        {
          title: "Optimized Checkout Flow",
          description: "The checkout experience was streamlined using Shopify’s secure webview, allowing pre-filled customer details, fewer steps, and multiple payment options for quicker repeat purchases."
        },
        {
          title: "Performance Enhancements",
          description: "To handle large catalogs, lazy loading, image caching, and pagination were implemented, improving app speed, reducing load times, and ensuring a smooth user experience across all devices."
        }
      ]
    },
    resultsAchieved: {
      sectionTitle: "Results Client Received in 2 Months",
      items: [
        {
          title: "Higher Engagement on Mobile",
          description: "User sessions increased with more time spent browsing products and interacting within the app."
        },
        {
          title: "Boost in Repeat Purchases",
          description: "Simplified checkout and wishlist features encouraged customers to return and reorder frequently."
        },
        {
          title: "Better Re-engagement Rates",
          description:"Personalized push notifications effectively brought users back, boosting conversions and reducing cart abandonment."
        },
        {
          title: "Seamless Data Sync",
          description: "Real-time integration with Shopify ensured accurate product, cart, and order data across all app functions."
        },
        {
          title: "Faster App Experience",
          description: "Performance optimizations delivered quicker load times, even with thousands of high-resolution product listings."
        }
      ],
      summary: "The Warley Superstore mobile app transformed how the brand interacts with its customers. With deep Shopify integration, performance optimization, and real-time engagement features, the app delivered significant growth in retention and repeat business. Warley now has a scalable mobile platform ready for future features like loyalty programs and exclusive in-app promotions."
    },
  },
];