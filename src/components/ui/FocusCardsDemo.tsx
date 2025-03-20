import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "https://images.unsplash.com/photo-1654188892289-5e03e48b22c7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Valley of life",
      src: "https://c8.alamy.com/comp/C1K10A/india-old-delhi-traffic-C1K10A.jpg",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://media.istockphoto.com/id/1071373242/photo/traffic-jam-on-the-polluted-streets-of-new-delhi-india.jpg?s=2048x2048&w=is&k=20&c=__DAi9HGutnj5TPh2E7KB4Vbv4y1_D8uijwcyGYFCPQ=",
    },
    {
      title: "Camping is for pros",
      src: "https://media.istockphoto.com/id/1071373332/photo/traffic-jam-on-the-polluted-streets-of-new-delhi-india.jpg?s=1024x1024&w=is&k=20&c=tDblp2U5Lwz4pla2-Ai34G7Xili51O-FieSj5csEpHA=",
    },
    {
      title: "The road not taken",
      src: "https://media.istockphoto.com/id/1393446442/photo/african-megacity-traffic-lagos-nigeria.jpg?s=1024x1024&w=is&k=20&c=_4oYS7iVqBlBr_KG1TfO396A4a2Lkuh_rW77cfQ7Ahw=",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
