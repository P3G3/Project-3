-- Removes previous version(s)
DROP TABLE IF EXISTS ingredients;

-- Builds table
CREATE TABLE ingredients (
  id BIGSERIAL PRIMARY KEY,
  ingredient VARCHAR(1024)
);

-- Populates the table with data
-- Source:  http://www.cookinglight.com/food/quick-healthy/best-ingredients-quick-cooking#brown-rice
INSERT INTO ingredients (ingredient) VALUES
('Boil-in-Bag Brown Rice'),
('Canned Diced Tomatoes'),
('Canned Organic Black Beans'),
('Frozen Shelled Edamame'),
('Couscous'),
('Canola Mayonnaise'),
('Smoked Paprika'),
('Frozen Corn Kernels'),
('Grape Tomatoes'),
('Fresh Pasta'),
('Large Eggs'),
('Plain Greek-Style Yogurt'),
('Pitted Kalamata Olives'),
('Refrigerated Potato Wedges'),
('Bagged Baby Spinach'),
('Panko'),
('Presliced Cremini Mushrooms'),
('Lower-Sodium Soy Sauce'),
('Chile Paste'),
('Chicken Broth');
