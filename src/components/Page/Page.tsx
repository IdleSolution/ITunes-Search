import React from 'react';
import IRootStoreState from '../../interfaces/storeStates/IRootStoreState';
import { connect } from "react-redux";
import Homepage from './Homepage';
import Loadingpage from './Loadingpage';
import Albumspage from './Albumspage';
import Errorpage from './Errorpage';

interface IProps {
    loading: boolean,
    searched: boolean,
    error: string | null,
}

/* 
    I didn't think the app was complex enough to use react router, so instead
    I decided to render components conditionally depending on global state
*/
const Page: React.FC<IProps> = ({loading, searched, error}) => (
        <>
            {(loading && !searched ? (
                <Loadingpage/>
            ) : error && !searched ? (
                <Errorpage message={error}/>
            ) : !searched ? (
                <Homepage/>
            ) : (
                <Albumspage />
            ))}

        </>
)

const mapStateToProps = (state: IRootStoreState) => {
    return {
        loading: state.loading.loading,
        searched: state.albums.searched,
        error: state.errors.error
    }
}

export default connect(mapStateToProps)(Page);