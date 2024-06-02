import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

export default function Dashboard(props) {
    const [student, setStudent] = useState(null);
    const [exams, setExams] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [formData, setFormData] = useState({
        subject_id: '',
        exam_type: '',
        score: '',
    });

    useEffect(() => {
        axios.get('/student-exams')
            .then(response => {
                setStudent(response.data.student);
                setExams(response.data.exams);
            })
            .catch(error => {
                console.error('There was an error fetching the student exams!', error);
            });

        axios.get('/subjects')
            .then(response => {
                setSubjects(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the subjects!', error);
            });
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/exams', formData)
            .then(response => {
                setExams([...exams, response.data.exam]);
                setFormData({ subject_id: '', exam_type: '', score: '' });
            })
            .catch(error => {
                console.error('There was an error adding the exam!', error);
            });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {student && (
                                <div>
                                    <h3>Student: {student.name}</h3>
                                    <h4>Exam Results:</h4>
                                    <ul>
                                        {exams.map(exam => (
                                            <li key={exam.id}>
                                                {exam.subject.name} ({exam.exam_type}): {exam.score}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Subject:</label>
                                    <select name="subject_id" value={formData.subject_id} onChange={handleChange} required>
                                        <option value="">Select a subject</option>
                                        {subjects.map(subject => (
                                            <option key={subject.id} value={subject.id}>{subject.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label>Exam Type:</label>
                                    <input
                                        type="text"
                                        name="exam_type"
                                        value={formData.exam_type}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Score:</label>
                                    <input
                                        type="number"
                                        name="score"
                                        value={formData.score}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit">Add Exam</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
