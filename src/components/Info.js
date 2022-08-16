import grow_together_illustration from "../assets/images/illustration-grow-together.svg";
import flowing_conversation_illustration from "../assets/images/illustration-flowing-conversation.svg";
import your_users_illustration from "../assets/images/illustration-your-users.svg";

const infoData = [
  {
    id: 1,
    title: "Grow Together",
    content:
      "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    image_url: grow_together_illustration,
    alt_text: "Grow Together Illustration",
  },
  {
    id: 2,
    title: "Flowing Conversations",
    content:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    image_url: flowing_conversation_illustration,
    alt_text: "Flowing Conversations Illustration",
  },
  {
    id: 3,
    title: "Your Users",
    content:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    image_url: your_users_illustration,
    alt_text: "Your Users Illustration",
  },
];

function Info() {
  return (
    <>
      {infoData.map((data) => {
        return (
          <div key={data.id} className="info-section">
            <section>
              <h2>{data.title}</h2>
              <p>{data.content}</p>
            </section>
            <img src={data.image_url} alt={data.alt_text} />
          </div>
        );
      })}
    </>
  );
}

export default Info;
