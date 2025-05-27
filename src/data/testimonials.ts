export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  verified: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    comment: "The items were true to size and of high quality. I received my package from Shop.co faster than expected! Will definitely be shopping here again.",
    verified: true
  },
  {
    id: "t2",
    name: "Alex K.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    comment: "I love that they offer such a variety of styles and sizes for all body types. The checkout process was smooth and their customer service is excellent!",
    verified: true
  },
  {
    id: "t3",
    name: "James L.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    comment: "The garments which arrive are always on the lookout for unique fashion pieces, and Shop.co delivers! Their collection is both trendy and high-quality.",
    verified: true
  },
  {
    id: "t4",
    name: "Michelle T.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
    comment: "Great selection of clothes with affordable prices. Shipping was quick and everything arrived as expected. Would recommend to friends!",
    verified: true
  }
];