import React, { createContext } from 'react';


const EventContext = createContext();

const PortalContext = ({children}) => {

    const eventValue={

    }
    return (
        <div>
            <EventContext.Provider value={eventValue}>
                {children}
            </EventContext.Provider>
        </div>
    );
};

export default PortalContext;