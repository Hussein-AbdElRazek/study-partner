import React, { useState } from 'react';
import inputClasses from './styles/Input.module.css'
import classes from './styles/Skills.module.css'
import { InputBase, Slider } from '@mui/material';
import { Btn } from './Btn';
import { Chip } from '../ui';

const rateMarks = [
    {
        value: 1,
        label: '1',
    },
    {
        value: 2,
        label: '2',
    },
    {
        value: 3,
        label: '3',
    },
    {
        value: 4,
        label: '4',
    },
    {
        value: 5,
        label: '5',
    },
];

export const Skills = (props) =>
{
    const {
        initialSkills,
        disabled,
    } = props;
    const [skillName, setSkillName] = useState('');
    const [skillRate, setSkillRate] = useState(1);
    const [skills, setSkills] = useState(initialSkills || []);

    const handleInputChange = (event) =>
    {
        setSkillName(event.target.value);
    };
    const onChangeSlider = (event) =>
    {
        setSkillRate(event.target.value)
    }
    const handleAddSkill = () =>
    {
        setSkills(prev =>
            [...prev,
            { name: skillName, rate: skillRate }
            ])
        setSkillName("")
        setSkillRate(1)
    };

    const handleDeleteValue = (valueToDelete) =>
    {
        setSkills((prevValues) =>
            prevValues.filter((value) => value !== valueToDelete)
        );
    };

    return (
        <>
            {/* SKILLS container, label and input hidden when disabled */}
            <div
                className={classes.container}
            >
                <label
                    className={inputClasses.label}
                >
                    Skills
                </label>
                <div
                    className={classes.content}
                >
                    {skills.map((value, index) => (
                        <Chip
                            key={index}
                            value={value}
                            onDelete={() => handleDeleteValue(value)}
                        />
                    ))}
                    {!disabled && (
                        <InputBase
                            placeholder='Type your skill'
                            value={skillName}
                            onChange={handleInputChange}
                            className={classes.input}
                        />
                    )}
                </div>
            </div>
            {/* Rate hidden when disabled */}
            {
                skillName.trim() !== '' && (
                    <div
                        className={classes.rateContainer}
                    >
                        <p>Rate this skill out of five</p>
                        <Slider
                            aria-label="Skill rate"
                            defaultValue={0}
                            step={1}
                            min={1}
                            max={5}
                            valueLabelDisplay="auto"
                            marks={rateMarks}
                            className={classes.slider}
                            onChange={onChangeSlider}
                            value={skillRate}
                        />
                        <div
                            className={classes.rateAction}
                        >
                            <Btn
                                onClick={handleAddSkill}
                            >
                                Done
                            </Btn>
                        </div>
                    </div>
                )
            }
        </>
    );
};

