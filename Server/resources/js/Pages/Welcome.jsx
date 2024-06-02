import { Link, Head } from '@inertiajs/react';
import bg from '../assets/bg.png';

export default function Welcome(props) {
    return (
        <>
            <Head title="Bienvenue" />

            <section className="bg-yellow-50 overflow-hidden min-h-screen flex items-center">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[730px] w-full relative z-10">
                    <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="absolute bottom-0 right-0 hidden lg:block">
                            <img className="object-contain w-auto h-48" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png" alt="" />
                        </div>

                        <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
                                Bienvenue sur votre compte personnel
                            </h1>
                            <p className="mt-8 text-xl text-black">
                                Un système d'information intégré qui permet de mettre en place de nouvelles méthodes de gestion scolaire au sein des établissements éducatifs
                            </p>

                            <div className="mt-8 flex flex-col items-center lg:items-start relative z-20">
                                {props.auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="px-4 py-2 mt-4 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 "
                                    >
                                        Tableau de bord
                                    </Link>
                                ) : (
                                    <div className="mt-4 flex space-x-4">
                                        <Link
                                            href={route('login')}
                                            className="px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 "
                                        >
                                            Connexion
                                        </Link>

                                        <Link
                                            href={route('register')}
                                            className="px-4 py-2 font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 "
                                        >
                                            Inscription
                                        </Link>
                                    </div>
                                )}
                            </div>

                           
                        </div>
                    </div>

                    <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                        <div className="absolute inset-0">
                            <img className="object-cover w-full h-full" src={bg} alt="" />
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    </div>
                </div>
            </section>
        </>
    );
}
