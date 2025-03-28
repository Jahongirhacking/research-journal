import { LoadingOutlined } from "@ant-design/icons"
import { Suspense } from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import TestComponent from "../components/TestComponent"
import RootLayout from "../layouts/RootLayout"
import AdminPage from "../pages/admin"
import LoginPage from "../pages/auth/LoginPage"
import { RegisterPage } from "../pages/auth/RegisterPage"
import { default as AuthRootLayout } from "../pages/auth/RootLayout"
import { AboutPage, AnnouncementsPage, ArticleDetailsPage, ArticlesPage, ContactPage, EditorialPage, MainPage } from "../pages/landing"
import ProfilePage from "../pages/profile"
import EditProfile from "../pages/profile/EditProfile"
import ProfileArticles from "../pages/profile/ProfileArticles"
import SendArticle from "../pages/profile/SendArticle"
import CallbackPage from "../pages/utils/CallbackPage"
import { buildRoutes, IRoute } from "../utils/routeUtils"
import NotFoundPage from "./NotFoundPage"

const publicRoutes: IRoute[] = [
    {
        path: '',
        element: <MainPage />
    },
    {
        path: '/articles',
        element: <ArticlesPage />
    },
    {
        path: '/articles/:id',
        element: <ArticleDetailsPage />
    },
    {
        path: '/about',
        element: <AboutPage />
    },
    {
        path: '/editorial',
        element: <EditorialPage />
    },
    {
        path: '/announcements',
        element: <AnnouncementsPage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
    {
        path: 'auth',
        element: <AuthRootLayout />,
        children: [
            { path: 'login', element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
            { path: "callback", element: <CallbackPage /> },
        ]
    },
    { path: "test/component", element: <TestComponent /> },
    // { path: "error", element: <ErrorPage /> }
];

const privateRoutes: IRoute[] = [
    {
        path: "profile",
        element: <ProfilePage />,
        children: [
            {
                path: 'edit',
                element: <EditProfile />
            },
            {
                path: 'articles',
                element: <ProfileArticles />
            },
            {
                path: 'send-article',
                element: <SendArticle />
            },
        ]
    },
    {
        path: "admin",
        element: <AdminPage />
    },
]

const MainRouter = () => {
    return (
        <Router>
            <Suspense fallback={<LoadingOutlined />}>
                <Routes>
                    <Route path="/" element={<RootLayout />}>
                        {buildRoutes(publicRoutes)}
                        {buildRoutes(privateRoutes, 'private')}
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    )
}

export default MainRouter