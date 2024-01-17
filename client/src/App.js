import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Products from "scenes/products";
import Customers from "scenes/customers";
import Transactions from "scenes/transactions";
import Geography from "scenes/geography";
import Overview from "scenes/overview";
import Daily from "scenes/daily";
import Monthly from "scenes/monthly";
import Breakdown from "scenes/breakdown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";
import NewsList from "scenes/news";
import Register from "scenes/register/Index";
import Information from "scenes/information";
import AddInformation from "scenes/information/AddInformation";
import MarketData from "scenes/marketdata";
import Forex from "scenes/forex";
import RedeemPoints from "scenes/points";
import Feedbacks from "scenes/feedbacks";
import FAQ from "scenes/faq";
import Login from "scenes/login";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/news" element={<NewsList />} />
              <Route path="/register" element={<Register />} />
              <Route path="/information" element={<Information />} />
              <Route path="/add_information" element={<AddInformation />} />
              <Route path="/user" element={<Admin />} />
              <Route path="/users" element={<Admin />} />
              <Route path="/market_data" element={<MarketData />} />
              <Route path="/redeem_points" element={<RedeemPoints />} />
              <Route path="/forex" element={<Forex />} />
              <Route path="/feedbacks" element={<Feedbacks />} />
              <Route path="/faq" element={<FAQ />} />

            </Route>
          </Routes>
        </ThemeProvider>
        <Routes>

          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;