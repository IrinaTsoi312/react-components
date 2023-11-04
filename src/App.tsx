import { HashRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import NotFound from "./pages/NotFound";
import "./App.scss";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function WrapperApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

// export default class App extends Component<object, IValueState> {
//   constructor(props: object) {
//     super(props);
//     this.state = {
//       inputValue: localStorage.getItem('searchValue') || '',
//       showResults: false,
//       filmData: null,
//       filteredData: null,
//       loading: true,
//     };
//   }

//   componentDidMount() {
//     fetch('https://swapi.dev/api/films/')
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({ showResults: true, filmData: data, loading: false });
//       })
//       .catch((error) => {
//         throw new Error(`Error fetching data: ${error}`);
//       });
//   }

//   handleInputChange = (event: FormEvent<HTMLInputElement>) => {
//     const targetValue: string = event.currentTarget.value.trim();
//     this.setState({ inputValue: targetValue });
//   };

//   handleFormSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     const inputValue = this.state.inputValue.trim();

//     if (inputValue !== '') {
//       localStorage.setItem('searchValue', inputValue);
//       this.setState((prevState) => {
//         if (prevState.filmData) {
//           const filteredData: IFilmList = {
//             ...prevState.filmData,
//             results: prevState.filmData.results.filter((film) =>
//               film.title.toLowerCase().includes(inputValue.toLowerCase())
//             ),
//           };
//           return { showResults: true, filteredData };
//         }
//         return null;
//       });
//     }
//   };

//   throwError = () => {
//     try {
//       throw new Error('Intentional error thrown by ErrorThrower');
//     } catch (error) {
//       this.setState({ hasError: true, error });
//     }
//   };

//   render() {
//     const filmsToShow = this.state.filteredData || this.state.filmData;
//     return (
//       <ErrorBoundary>
//         <main>
//           <header className="header">
//             <div className="logo-block">
//               <a href="/">
//                 <img src={Logo} alt="logo" className="logo" />
//               </a>
//               <p className="logo-name">
//                 Star Wars movies <span className="sub-logo">wiki</span>
//               </p>
//             </div>
//             <div className="search-panel">
//               <form onSubmit={this.handleFormSubmit} className="search-form">
//                 <input
//                   type="text"
//                   name="search"
//                   id="searchField"
//                   placeholder="Search..."
//                   value={this.state.inputValue}
//                   onChange={this.handleInputChange}
//                 />
//                 <button id="btnSearch" type="submit">
//                   Search
//                 </button>
//               </form>
//             </div>
//             <button type="button" onClick={this.throwError}>
//               Click to Throw Error into console
//             </button>
//           </header>
//           {this.state.loading ? (
//             <div>Loading...</div>
//           ) : (
//             this.state.showResults && <SearchResults filmData={filmsToShow} />
//           )}
//         </main>
//       </ErrorBoundary>
//     );
//   }
// }
