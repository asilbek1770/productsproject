import React from 'react';
import Movies from "../TableMapFackeDatabaseUsing/Component/Movies";
import CounterApp from "../Counter/Component/CounterApp";
import Search from "../SearchProject/Component/Search";
import ReactLessonsModules from "../ReactLessons/ReactLessons";

function Home(props) {
    return (
        <section >
            <div className="p1-4">
                <h2 className="text-center ">Very little projects </h2>
                <h4 className="text-center py-4">Movies project</h4>
                <Movies />
                <h4 className="text-center py-4">Counter project</h4>
                <CounterApp />
                <h4 className="text-center my-4 ">Search project</h4>
                <Search />
                <h4 className="text-center my-4">React Lessons Project</h4>
                <ReactLessonsModules />
            </div>
        </section>
    );
}

export default Home;