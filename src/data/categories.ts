export interface Category {
  id: string;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "c1",
    name: "Casual",
    image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "c2",
    name: "Formal",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "c3",
    name: "Party",
    image: "https://images.pexels.com/photos/1102673/pexels-photo-1102673.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: "c4",
    name: "Gym",
    image: "https://images.pexels.com/photos/28061/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
  }
];