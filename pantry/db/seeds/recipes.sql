-- Removes previous version(s)
DROP TABLE IF EXISTS recipes;

-- Builds table
CREATE TABLE recipes (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  url TEXT NOT NULL,
  img TEXT NOT NULL
);

-- Populates table with data
-- Source: https://www.bonappetit.com/gallery/most-popular-recipes-2016
INSERT INTO recipes (name, url, img) VALUES
('BAs Best Green Bean Casserole', 'https://www.bonappetit.com/recipe/bas-best-green-bean-casserole', 'https://assets.bonappetit.com/photos/58238e936d443d3e21278b94/master/w_768,h_512,c_limit/bas-best-green-bean-casserole.jpg'),
('Pietros Chicken Parm', 'https://www.bonappetit.com/recipe/pietros-chicken-parmesan', 'https://assets.bonappetit.com/photos/57acbf481b33404414975157/master/w_768,h_512,c_limit/pietros-chicken-parmesan.jpg'),
('California Veggie Sandwich', 'https://www.bonappetit.com/recipe/california-veggie-sandwich', 'https://assets.bonappetit.com/photos/57aca69153e63daf11a4d915/master/w_768,h_512,c_limit/california-veggie-sandwich.jpg'),
('Stellar Quinoa Burger', 'https://www.bonappetit.com/recipe/stellar-quinoa-burger', 'https://assets.bonappetit.com/photos/57acd1f51b334044149751ff/master/w_768,h_512,c_limit/stellar-quinoa-burger.jpg'),
('Thai Steak and Noodle Salad', 'https://www.bonappetit.com/recipe/thai-steak-and-noodle-salad', 'https://assets.bonappetit.com/photos/57acc2941b3340441497516e/master/w_768,h_512,c_limit/thai-steak-and-noodle-salad.jpg'),
('BAs Best Fried Chicken Sandwich', 'https://www.bonappetit.com/recipe/bas-best-fried-chicken-sandwich', 'https://assets.bonappetit.com/photos/57acc69553e63daf11a4d9e9/master/w_768,h_512,c_limit/iphone-real-fried-chicken-sandwich.jpg'),
('BAs Best Eggplant Parm', 'https://www.bonappetit.com/recipe/bas-best-eggplant-parmesan', 'https://assets.bonappetit.com/photos/57d9d24d5a14a530086ef7bf/master/w_768,h_512,c_limit/bas-best-eggplant-parmesan.jpg'),
('Colcannon', 'https://www.bonappetit.com/recipe/colcannon', 'https://assets.bonappetit.com/photos/57acc65853e63daf11a4d9e6/master/w_768,h_512,c_limit/colcannon.jpg'),
('BAs Best Piña Colada', 'https://www.bonappetit.com/recipe/bas-best-pina-colada', 'https://assets.bonappetit.com/photos/57acca141b334044149751b6/master/w_768,h_512,c_limit/bas-best-pina-colada.jpg'),
('Frosé', 'https://www.bonappetit.com/recipe/frose-frozen-rose-wine', 'https://assets.bonappetit.com/photos/57acadf253e63daf11a4d959/master/w_768,h_512,c_limit/frose-frozen-rose.jpg');
