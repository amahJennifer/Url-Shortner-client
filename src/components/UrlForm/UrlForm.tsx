import React, { useState } from 'react';
import {createShortUrl} from "../../Services/apiService";
import './urlForm.css';
import AlertModal from "../Alert/Alert";

interface UrlFormProps {}

const UrlForm: React.FC<UrlFormProps> = () => {
    const [longUrl, setLongUrl] = useState<string>('');
    const [shortUrl, setShortUrl] = useState<string>('');
    const [error, setError] = useState<string | null>('');
    const [success,setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(false)

        try {
            const response = await createShortUrl(longUrl);
            setShortUrl(response.data.toString());
            setSuccess(true)
        } catch (error) {
            setError('Failed to shorten URL');
        }
    };


    return (
        <>
            <div className={'url-form-container'}>
                <form onSubmit={handleSubmit} className={'url-form'}>
                    <input
                        type="url"
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                        placeholder="Enter long URL"
                        required
                    />
                    <button type="submit">Shorten URL</button>
                </form>

                {shortUrl && <p>Short URL: <a href={`${process.env.REACT_APP_API_BASE_URL}/${shortUrl}`} target={'_blank'} rel="noreferrer">{`${process.env.REACT_APP_API_BASE_URL}/${shortUrl}`}</a></p>}
            </div>
            {success &&
                <div>
                    <AlertModal message={'url created successfully.'}/>
                </div>
            }
        </>
    );
};

export default UrlForm;
