import style from '@/style/components/header.module.css'
const Header = () => {
    return (
        <div className={style.header}>
            <div className={style.personal}>
                <h1>Marie Pocheron</h1>
                <h2>designer et illustratrice</h2>
            </div>
        </div>
    )
};

export default Header