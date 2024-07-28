import React from "react";

export default function Home() {
  return (
    <div className="w-[100%] p-5 max-w-[1200px] mx-auto ">
      <h1 className="text-center text-3xl font-[600]">Introducing Blogify</h1>
      <h2 className="text-slate-700 mt-2x text-center text-xl font-[500]">
        Your Ultimate Blogging Companion
      </h2>
      <p className="mt-8 mb-2 text-slate-900">
        Blogify is a dynamic blogging platform designed to simplify the art of
        content creation and discovery. With a sleek interface and powerful
        features, Blogify empowers users to effortlessly share their thoughts,
        connect with others, and explore a world of captivating content.
      </p>
      <p className="mb-2">
        Built on the robust MERN stack and styled with Tailwind CSS, Blogify
        prioritizes functionality without compromising on aesthetics. Whether
        you're a seasoned blogger or just starting out, Blogify provides the
        tools and community you need to thrive in the digital landscape. Join
        Blogify today and unleash your creativity!
      </p>
      <Features />
    </div>
  );
}

function Features() {
  return (
    <>
      <h2 className="mt-8 mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Dive into the World of Seamless Blogging :
      </h2>
      <ol className="space-y-4 text-gray-900 list-decimal list-inside dark:text-gray-400">
        <li>
          <b>Authentication:</b>
          Blogify ensures secure access to your account with robust
          authentication using JWT (JSON Web Tokens). This means only authorized
          users can log in and access the platform, providing a safe environment
          for sharing content.
        </li>
        <li>
          <b>Password Hashing:</b>
          Blogify employs password Hashing for security. When a user registers
          it's password is saved in hashed format.
        </li>
        <li>
          <b>Password Management: </b>
          Forgot your password? No problem! With Blogify's password management
          feature, users can easily reset their passwords. An OTP (One-Time
          Password) is sent to the user's registered email address for
          verification, ensuring a seamless and secure password recovery
          process.
        </li>
        <li>
          <b>Account Settings: </b>
          Customize your profile to reflect your personality with Blogify's
          account settings feature. Users can update their password and display
          name, giving them control over their online identity and enhancing
          their user experience.
        </li>
        <li>
          <b>Blogs Page: </b>
          Explore a diverse array of content on Blogify's blogs page. Discover
          blogs from other users covering a wide range of topics, from travel
          and lifestyle to technology and fashion, allowing you to find content
          that resonates with your interests.
        </li>
        <li>
          <b>My Blogs Section:</b>
          Keep track of your own published blogs with Blogify's "My Blogs"
          section. Easily manage and access your content in one centralized
          location, making it convenient to monitor your blogging journey and
          engage with your audience.
        </li>
        <li>
          <b>Blog Management: </b>
          Create, delete, and edit your blogs effortlessly with Blogify's
          intuitive blog management feature. Whether you're crafting a new
          masterpiece or fine-tuning an existing post, Blogify provides the
          tools you need to bring your ideas to life.
        </li>
        <li>
          <b>Comments:</b>
          Engage with other users and foster meaningful discussions with
          Blogify's comments feature. Leave comments on other users' blogs to
          share your thoughts and perspectives, creating a sense of community
          and connection within the platform.
        </li>
        <li>
          <b>Profile Customization:</b>
          Personalize your profile to make it uniquely yours with Blogify's
          profile customization feature. Upload a profile image that reflects
          your personality and interests, allowing you to stand out and make a
          lasting impression on other users.
        </li>
        <li>
          <b>Simple Categorization:</b>
          Discover new content effortlessly with Blogify's simple categorization
          feature. Browse through intuitive categories such as "Travel," "Food,"
          "Technology," and more, making it easy to find blogs that pique your
          curiosity and inspire your creativity.
        </li>
      </ol>
    </>
  );
}
