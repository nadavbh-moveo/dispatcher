import Button, { BUTTON_TYPE } from "../../../../shared/components/Button/Button.component";
import Card from "../../../../shared/components/Card/Card.component";
export interface INewsCardProps {
    title: string;
    subTitle: string;
    description: string;
    date: string;
    imgSrc: string;
}
const NewsCard = ({title, subTitle, description, date, imgSrc}: INewsCardProps) => {

    return (<Card>
        <div className="news-card-wrapper">
            <section className="news-img">
                <img src={imgSrc} alt="" />
            </section>
            <section className="content">
                <h5 className="soft-title">{date}</h5>
                <h2 className="bold-title">{title}</h2>
                <h5 className="soft-title">{subTitle}</h5>
                <p>
                    {description}
                </p>
                <div className="navigate-wrapper">
                    <Button text="navigate to disptach" type={BUTTON_TYPE.PRIMARY}/>
                </div>
            </section>
        </div>
    </Card>)
}

export default NewsCard;