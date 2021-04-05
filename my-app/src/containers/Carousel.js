import { connect } from 'react-redux';
import Carousel from '../components/Carousel';

const mapStateToProps = (state) => ({
	projectsList: state.reducer.projectsList,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);
