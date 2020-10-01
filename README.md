# SubHub
*SubHub* provides location, information and user-reviews of restaurants nearby Sydney. SubHub retrieve data from Google Places API and Zomato API, third-party APIs that allows developers to access their data and functionality by making requests with specific parameters to a URL. In this particular case, we put parameter of location based on Google Places (since this is the best one) and detail information including name of restaurant, type of restaurant, and user-reviews from Zomato. This app will run dynamically updated HTML and CSS powered by Javascript and jQuery. 


## Goal 
<p>AS A foodie traveller, I WANT to find somewhere good to eat. SO THAT I can find the best nearby restaurants.</p>


## Acceptance Criteria
* GIVEN a foodie dashboard with dropdown buttons
* WHEN I search for a type of restaurant
* THEN I am presented with a map showing markers nearby restaurant added to the search history
* WHEN I click a marker of selected restaurant 
* THEN I am presented with the restaurant name, address, phone number, website (if available), and star reviews
* WHEN I click on a type of restaurant in the search history
* THEN I am again presented with a map showing markers nearby restaurant
* WHEN I open the resto dashboard
* THEN I am presented with the last searched resto


## Build With
* [VScode] (http://code.visualstudio.com/) - The editor of choice.
* [Chrome DevTools] (https://developers.google.com/web/tools/chrome-devtools) - The editor pages on-the-fly and problem diagnostic.
* [W3C MarkUp Validator] (https://validator.w3.org/) - The markup validation service (HTML, XHTML) of web documents.
* [GetBootstrap] (https://getbootstrap.com/) - Open-source CSS framework directed at responsive, mobile-first front-end web development. 
* [Postman] (https://www.postman.com/) - The Postman API allows to easy access to API.
* [Favic-O-Matic] (https://favicomatic.com/) - The favicon generator both .ico, PNG and the HTML code needed.

## API
* [Google Maps API] (https://developers.google.com/maps/documentation) - An interactive map to our website
* [Google Places API] (https://developers.google.com/places/web-service/overview) - a simple way to add Google's rich, local information to your maps. 
* [Zomato API] (https://developers.zomato.com/) - GET /cuisines / Get list of all cuisines in a city

## Screenshot

### Homepage (Geolocation)
![Screen Shot 2020-10-01 at 10 16 28](https://user-images.githubusercontent.com/7066137/94756573-395c3f00-03db-11eb-993a-8e07a4983ca9.png)

### Search Result (Show Map)
![SubHub-SearchResult](https://user-images.githubusercontent.com/7066137/94756605-4da03c00-03db-11eb-845f-0cf45f315f2e.png)


### Search Result (List of Recent Search)
![Screen Shot 2020-10-01 at 10 16 39](https://user-images.githubusercontent.com/7066137/94756545-2a758c80-03db-11eb-824e-e8fc9ec8f0ed.png)



### Link to the App
<a href="https://annisapf.github.io/Yomato-Food-Finder/">The URLs of the deployed applications in GitHub</a>

<a href="https://subhub.site/">Sub Hub Site</a>