import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelector = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    }

    return <div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} alt={''}
                 className={s.mainPhoto}/>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelector}/>}


            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
            />
        </div>
    </div>

}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt={''} />
                <ProfileStatusWithHooks status={status}
                               updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;
