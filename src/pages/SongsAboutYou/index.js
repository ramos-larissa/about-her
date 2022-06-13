import React from "react";
import "./styles.css";
import Menu from "../../components/menu";

export default function SongsAboutYou() {
    return (
        <>
            <div className="page-songs">
                <Menu />
                <div className="content-songs">
                    <div className="div-song">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/pycFaC_1x3s"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div className="text-songs">
                            <h1 className="title-song">Exist For Love - Aurora</h1>
                            <br />
                            <p className="text-song">
                                "How everything good in life seems to lead back
                                to you and every single time I run into your
                                arms I feel like I exist for love. Like I exist
                                for love only for love. I can't imagine how it
                                is to be forbidden from loving 'Cause when you
                                walked into my life I could feel my life begin
                                like I was torn apart the minute I was only born
                                and you're the other half the only thing that
                                makes me whole. I know it sounds like a lot but
                                you really need to know we are leaning out for
                                love and we will lean for love forever....I
                                know, I love you so"
                            </p>
                        </div>
                    </div>

                    <div className="div-song">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/rHgGm-03Q3Y"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div className="text-songs">
                            <h1 className="title-song">Needy - Ariana Grande</h1>
                            <br />
                            <p className="text-song">
                                "Sorry that I think I'm not enough And sorry if
                                I say sorry way too much. I'ma scream and shout
                                for what I love. Passionate, but I don’t give no
                                fucks I admit that I'm a lil' messed up....I’m
                                obsessive and I love too hard good at
                                overthinking with my heart. And I can be needy
                                way too damn needy. I can be needy tell me how
                                good it feels to be needed"
                            </p>
                        </div>
                    </div>

                    <div className="div-song">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/0ZL2nqhBYLs"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div className="text-songs">
                            <h1 className="title-song">
                                It's All About You - McFly
                            </h1>
                            <br />
                            <p className="text-song">
                                "It's all about you and I would answer all your
                                wishes If you asked me too but if you deny me
                                one of your kisses I don't know what I'd do"
                            </p>
                        </div>
                    </div>

                    <div className="div-song">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/6inwzOooXRU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div className="text-songs">
                            <h1 className="title-song">Close To You - Carpenters</h1>
                            <br />
                            <p className="text-song">
                                "Why do birds suddenly appear everytime you are
                                near? Just like me, they long to be close to you
                                Why do stars fall down from the sky every time
                                you walk by? Just like me, they long to be close
                                to you. On the day that you were born the angels
                                got together and decided to create a dream come
                                true. So they sprinkled moondust in your hair of
                                gold and starlight in your eyes of blue"
                            </p>
                        </div>
                    </div>

                    <div className="div-song">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/8-_Yd03kfE8"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <div className="text-songs">
                            <h1 className="title-song">
                                Can't Stand It - NeverShoutNever
                            </h1>
                            <br />
                            <p className="text-song">
                                "I've been searching for a girl thats just like
                                you cause I know that your heart is true. Baby I
                                love you I never want to let you go the more I
                                think about the more I want to let you know that
                                everything you do Is super duper cute and I cant
                                stand it. Let's sell all our shit and run away to
                                sail the ocean blue then you'll know that my
                                heart is true"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
