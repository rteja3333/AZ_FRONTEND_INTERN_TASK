import React, { useState } from 'react';
import './PartsList.css';
import clockIcon from '../assets/clock.svg';
import difficultyIcon from '../assets/difficulty.svg';
import chaptersIcon from '../assets/chapters.svg';
import downArrowIcon from '../assets/down-arrow.svg';
import upArrowIcon from '../assets/up-arrow.svg';

// Import individual icons for each list item
import icon1Item1 from '../assets/video.svg';
import icon2Item1 from '../assets/clock.svg';
import icon1Item2 from '../assets/questionmark.svg';
import icon2Item2 from '../assets/clock.svg';
import icon1Item3 from '../assets/questionmark.svg';
import icon2Item3 from '../assets/clock.svg';
import icon1Item4 from '../assets/excercise.svg';
import icon2Item4 from '../assets/clock.svg';
import icon1Item5 from '../assets/chapters.svg';
import icon2Item5 from '../assets/clock.svg';

function PartsList() {
    const [isListVisiblePart1, setIsListVisiblePart1] = useState(false);
    const [isListVisiblePart2, setIsListVisiblePart2] = useState(false);
    const [isListVisiblePart3, setIsListVisiblePart3] = useState(false);

    const [progressPart1, setProgressPart1] = useState(60);
    const [progressPart2, setProgressPart2] = useState(80);
    const [progressPart3, setProgressPart3] = useState(40);

    const toggleList = (part) => {
        if (part === 1) setIsListVisiblePart1(!isListVisiblePart1);
        if (part === 2) setIsListVisiblePart2(!isListVisiblePart2);
        if (part === 3) setIsListVisiblePart3(!isListVisiblePart3);
    };

    // Data for sliding list items, each with custom icons and text
    const listItems = [
        { leftIcon: icon1Item1, rightIcon: icon2Item1, leftText: "Video 1", rightText: "10:00" },
        { leftIcon: icon1Item2, rightIcon: icon2Item2, leftText: "Article 2", rightText: "10:00" },
        { leftIcon: icon1Item3, rightIcon: icon2Item3, leftText: "Quiz 1", rightText: "10:00" },
        { leftIcon: icon1Item4, rightIcon: icon2Item4, leftText: "Coding Exercise 1", rightText: "10:00" },
        { leftIcon: icon1Item5, rightIcon: icon2Item5, leftText: "Combined Resource 1", rightText: "10:00" }
    ];

    return (
        <div className="parts-list">
            {/* Part 1 Box */}
            <div className="part-box-wrapper">
                <div className="part-box">
                    <div className="part-title">Part 1</div>
                    <div className="part-description">Live Sessions</div>

                    <div className="icon-line-container">
                        <div className="icon-line">
                            <div className="icon-item">
                                <img src={clockIcon} alt="Clock Icon" />
                                <span>02:00:00</span>
                            </div>
                            <div className="icon-item">
                                <img src={difficultyIcon} alt="Difficulty Icon" />
                                <span>Medium</span>
                            </div>
                            <div className="icon-item">
                                <img src={chaptersIcon} alt="Chapters Icon" />
                                <span>5</span>
                            </div>

                            <div className="icon-item" onClick={() => toggleList(1)}>
                                <img
                                    src={isListVisiblePart1 ? upArrowIcon : downArrowIcon}
                                    alt="Toggle Arrow"
                                />
                            </div>
                        </div>

                        <div className="progress-percentage-box">
                            {progressPart1}% Completed
                        </div>
                    </div>

                    <div className="progress-bar" style={{ background: `linear-gradient(90deg, #172B4D ${progressPart1}%, #EFF5FF ${progressPart1}%)` }}></div>
                </div>

                <div className={`slide-list ${isListVisiblePart1 ? 'visible' : ''}`}>
                    {listItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="list-item">
                                <div className="left-side">
                                    <img src={item.leftIcon} alt="Left Icon" />
                                    <span>{item.leftText}</span>
                                </div>
                                <div className="right-side">
                                    <img src={item.rightIcon} alt="Right Icon" />
                                    <span>{item.rightText}</span>
                                </div>
                            </div>
                            {index < listItems.length - 1 && <div className="separator" />}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Part 2 Box */}
            <div className="part-box-wrapper">
                <div className="part-box">
                    <div className="part-title">Part 2</div>
                    <div className="part-description">Day 0</div>

                    <div className="icon-line-container">
                        <div className="icon-line">
                            <div className="icon-item">
                                <img src={clockIcon} alt="Clock Icon" />
                                <span>03:00:00</span>
                            </div>
                            <div className="icon-item">
                                <img src={difficultyIcon} alt="Difficulty Icon" />
                                <span>Hard</span>
                            </div>
                            <div className="icon-item">
                                <img src={chaptersIcon} alt="Chapters Icon" />
                                <span>10</span>
                            </div>

                            <div className="icon-item" onClick={() => toggleList(2)}>
                                <img
                                    src={isListVisiblePart2 ? upArrowIcon : downArrowIcon}
                                    alt="Toggle Arrow"
                                />
                            </div>
                        </div>

                        <div className="progress-percentage-box">
                            {progressPart2}% Completed
                        </div>
                    </div>

                    <div className="progress-bar" style={{ background: `linear-gradient(90deg, #172B4D ${progressPart2}%, #EFF5FF ${progressPart2}%)` }}></div>
                </div>

                <div className={`slide-list ${isListVisiblePart2 ? 'visible' : ''}`}>
                    {listItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="list-item">
                                <div className="left-side">
                                    <img src={item.leftIcon} alt="Left Icon" />
                                    <span>{item.leftText}</span>
                                </div>
                                <div className="right-side">
                                    <img src={item.rightIcon} alt="Right Icon" />
                                    <span>{item.rightText}</span>
                                </div>
                            </div>
                            {index < listItems.length - 1 && <div className="separator" />}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Part 3 Box */}
            <div className="part-box-wrapper">
                <div className="part-box">
                    <div className="part-title">Part 3</div>
                    <div className="part-description">Day 1</div>

                    <div className="icon-line-container">
                        <div className="icon-line">
                            <div className="icon-item">
                                <img src={clockIcon} alt="Clock Icon" />
                                <span>04:00:00</span>
                            </div>
                            <div className="icon-item">
                                <img src={difficultyIcon} alt="Difficulty Icon" />
                                <span>Expert</span>
                            </div>
                            <div className="icon-item">
                                <img src={chaptersIcon} alt="Chapters Icon" />
                                <span>15</span>
                            </div>

                            <div className="icon-item" onClick={() => toggleList(3)}>
                                <img
                                    src={isListVisiblePart3 ? upArrowIcon : downArrowIcon}
                                    alt="Toggle Arrow"
                                />
                            </div>
                        </div>

                        <div className="progress-percentage-box">
                            {progressPart3}% Completed
                        </div>
                    </div>

                    <div className="progress-bar" style={{ background: `linear-gradient(90deg, #172B4D ${progressPart3}%, #EFF5FF ${progressPart3}%)` }}></div>
                </div>

                <div className={`slide-list ${isListVisiblePart3 ? 'visible' : ''}`}>
                    {listItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className="list-item">
                                <div className="left-side">
                                    <img src={item.leftIcon} alt="Left Icon" />
                                    <span>{item.leftText}</span>
                                </div>
                                <div className="right-side">
                                    <img src={item.rightIcon} alt="Right Icon" />
                                    <span>{item.rightText}</span>
                                </div>
                            </div>
                            {index < listItems.length - 1 && <div className="separator" />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PartsList;
